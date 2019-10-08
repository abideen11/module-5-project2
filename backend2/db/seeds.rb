# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Entrepreneur.destroy_all

e1 = Entrepreneur.create(name: "Reece Kwame", country: "Ghana", continent: "Africa", reason: "To buy cattle and poultry, cattle will be used to extract and sell dairy products, and poultry to sell the eggs and meat.", amount: 260, img_url: "https://www.capitalfm.co.ke/news/files/2015/11/HAROLD-KIPCHUMBA.jpg")
e2 = Entrepreneur.create(name: "Luke Yuan", country: "Thailand", continent: "Asia", reason: "To buy food cart that will heat food and cool drinks, taken anywhere where potential customers will be.", amount: 300, img_url: "https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2019/09/MERed2ab76264298b26263c6aad4c8e0cheuk0924-1024x768.jpg")
e3 = Entrepreneur.create(name: "Grace Appiah", country: "South Africa", continent: "Africa", reason: "To buy a sewing machine, measuring tape and garments to make clothes and then sell.", amount: 220, img_url: "http://thebodyisnotanapology.com/wp-content/uploads/2015/03/shutterstock_32013157.jpg")
e4 = Entrepreneur.create(name: "Ashraf Hamza", country: "Algeria", continent: "Africa", reason: "Will be used to buy welding equipment and protective clothing.", amount: 370, img_url: "https://img.lovehabibi.com/561978/m/18020519194998d3.jpg")
e5 = Entrepreneur.create(name: "Aisha Dembele", country: "Mali", continent: "Africa", reason: "Buy 2 properties that will be renovated and then leased.", amount: 780, img_url: "https://images.squarespace-cdn.com/content/v1/565c3d39e4b027c789ba5b70/1562627901099-9Q1UBM2BQQRKMXDT2QOV/ke17ZwdGBToddI8pDm48kIRt6Kh1JaeOXOp22qdD8ABZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHmw-gD-fFds94Sc3Mk0l5bku1kVZBbbLmPhWNTXrs0So4F5g0NoLnpZnIjcCF6PEY/CAINEPRIZEFULL109.jpg")
e6 = Entrepreneur.create(name: "Francis Quan", country: "Vietnam", continent: "Asia", reason: "Will be utilize to buy tools needed to fix motorcycles and pay a year rent at building the business operates in.", amount: 1200, img_url: "https://www.advocate.com/sites/advocate.com/files/2018/01/31/im-fine-750x_1.jpg")
e7 = Entrepreneur.create(name: "Rashida Toure", country: "Ivory Coast", continent: "Africa", reason: "To buy medicinal pills, female hygiene products, toiletries and stationery.", amount: 380, img_url: "https://csaad.nyu.edu/wp-content/uploads/2019/01/maya.jpg")
e8 = Entrepreneur.create(name: "Ola Adeyemi", country: "Nigeria", continent: "Africa", reason: "To purchase equipment that will be used to fix phones, computers and printers.", amount: 400, img_url: "https://ak4.picdn.net/shutterstock/videos/12192374/thumb/1.jpg")
e9 = Entrepreneur.create(name: "Jean-Phillipe Toussaint", country: "Haiti", continent: "North America", reason: "To buy refurbished cameras that will be used to snap photos and record videos for photo shoots, weddings, birthdays, graduation and etc.", amount: 340, img_url: "https://live.staticflickr.com/3027/2584934729_b0cffe0934_z.jpg")
e10 = Entrepreneur.create(name: "Lucy Themba", country: "Botswana", continent: "Africa", reason: "To hire 2 more people for growing phone business. ", amount: 700, img_url: "https://www.blackhistorymonth.org.uk/wp-content/uploads/2019/09/Pawlet-Brookes-Photographer-Stuart-Hollis-www.osbornehollis.co-2-1-623x438.jpg")

