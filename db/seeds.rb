# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all;
User.destroy_all;

peter = User.create(email: 'nycphotog@email.com', password: 'maryjane', 
    first_name: 'peter', last_name: 'parker')
bruce = User.create(email: 'gamma@email.com', password: 'greendude', 
    first_name: 'bruce', last_name: 'banner')
steve = User.create(email: 'usa@email.com', password: 'america', 
    first_name: 'steve', last_name: 'rogers')
tony = User.create(email: 'stark@email.com', password: 'iamironman', 
    first_name: 'tony', last_name: 'stark')
app = User.create(email: 'appacad@email.com', password: 'starwars', 
    first_name: 'app', last_name: 'academy')
reed = User.create(email: 'stretch@email.com', password: 'susanstorm', 
    first_name: 'reed', last_name: 'richard')

demo = User.create(email: 'test@email.com', password: 'testing', 
    first_name: 'demo', last_name: 'login')

event1 = Event.create!(creator_id: peter.id, title: 'Aunt May Bday',
    description: 'come celebrate aunt mays birthday!', location: 'queens',
    start_time: '05/04/2020 12:00 pm', end_time: '05/04/2020 1:00 pm', category: 1)
event2 = Event.create!(creator_id: bruce.id, title: 'Gamma Ray Ted Talk',
    description: 'come learn about gamma rays!', location: 'manhattan',
    start_time: '06/04/2020 12:00 pm', end_time: '06/04/2020 1:00 pm', category: 2)
event3 = Event.create!(creator_id: steve.id, title: 'July 4th Party',
    description: 'celebrate america with captain america!', location: 'brooklyn',
    start_time: '07/04/2020 12:00 pm', end_time: '07/04/2020 1:00 pm', category: 3)
event4 = Event.create!(creator_id: tony.id, title: 'stark expo',
    description: 'check out the future of stark industries!', location: 'flushing',
    start_time: '08/04/2020 12:00 pm', end_time: '08/04/2020 1:00 pm', category: 4)
event5 = Event.create!(creator_id: reed.id, title: 'Baxter Reopening',
    description: 'celebrate with us the reopening of the baxter building!', location: 'flushing',
    start_time: '09/04/2020 12:00 pm', end_time: '09/04/2020 1:00 pm', category: 4)
event6 = Event.create!(creator_id: app.id, title: 'App Academy Grad Party!',
    description: 'its graduation day! come out and hang loose with us!', location: 'flushing',
    start_time: '10/04/2020 12:00 pm', end_time: '10/04/2020 1:00 pm', category: 4)
