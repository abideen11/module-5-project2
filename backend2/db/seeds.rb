# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Entrepreneur.destroy_all

e1 = Entrepreneur.create(name: "Reece Kwame", country: "Ghana", continent: "Africa", reason: "To buy cattle and poultry, cattle will be used to extract and sell dairy products, and poultry to sell the eggs and meat.", amount: 260)
e2 = Entrepreneur.create(name: "Luke Yuan", country: "Thailand", continent: "Asia", reason: "To buy food cart that will heat food and cool drinks, taken anywhere where potential customers will be.", amount: 300)
e3 = Entrepreneur.create(name: "Grace Appiah", country: "South Africa", continent: "Africa", reason: "To buy a sewing machine, measuring tape and garments to make clothes and then sell.", amount: 220)
e4 = Entrepreneur.create(name: "Ashraf Hamza", country: "Algeria", continent: "Africa", reason: "Will be used to buy welding equipment and protective clothing.", amount: 370)
e5 = Entrepreneur.create(name: "Aisha Dembele", country: "Mali", continent: "Africa", reason: "Buy 2 properties that will be renovated and then leased.", amount: 780)
e6 = Entrepreneur.create(name: "Francis Quan", country: "Vietnam", continent: "Asia", reason: "Utilize to buy tools needed to fix motorcycles and pay a year rent for business location.", amount: 1200)
e7 = Entrepreneur.create(name: "Rashida Toure", country: "Ivory Coast", continent: "Africa", reason: "To buy medicinal pills, female hygiene products, toiletries, stationery.", amount: 380)
e8 = Entrepreneur.create(name: "Ola Adeyemi", country: "Nigeria", continent: "Africa", reason: "To purchase equipment that will be used to fix phones, computers and printers.", amount: 400)
e9 = Entrepreneur.create(name: "Jean-Phillipe Toussaint", country: "Haiti", continent: "North America", reason: "To buy refurbished cameras that will be used to snap photos and record videos for photo shoots, weddings, birthdays, graduation and etc.", amount: 340)
e10 = Entrepreneur.create(name: "Lucy Themba", country: "Botswana", continent: "Africa", reason: "To hire 2 more people for growing phone business. ", amount: 700)

