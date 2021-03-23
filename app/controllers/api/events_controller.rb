class Api::EventsController < ApplicationController

    def create
        @event = Event.create!(event_params)

        render :show

        # if @event.save
        #     render "api/events/show"
        # else
        #     render json: @event.errors.full_messages, status: 422
        # end
    end

    def update
        @event = Event.find(params[:id])

        if @event && @event.update_attributes(event_params)
            render 'api/events/show'
        elsif !@event
            render json: ['Event does not exist'], status: 400
        else
            render json: @event.errors.full_messages, status: 401
        end
    end

    def index
        @events = Event.all
        render "api/events/index"
    end

    def show
        @event = Event.find(params[:id])
    end

    private

    def event_params
        params.require(:event).permit(:title, :description, :location, 
            :start_time, :end_time, :category)
    end

end