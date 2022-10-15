# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'start'
User.create(
    username:'koko',
    password:'koko'
)
10.times do
    Event.create(
    eventname: Faker::TvShows::GameOfThrones.house,
    fee: [500,200,100,10,150,600,1000,400].sample,
    location: Faker::Nation.capital_city,
    date: Faker::Date.forward(days: 23),
    slots: rand(1..15),
    details: Faker::Books::Lovecraft.paragraph(sentence_count: 2),
    user_id: rand(1..8)
    )
end
puts 'end'