class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def verify
    @user = User.find_by(email: params[:user][:email])
    # if @user
    #   render :show
      
    # else
    #   render :json => { id: nil, email: nil }
    # end
    render json: !!@user
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
