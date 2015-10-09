# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.create(lat: 37, lng: 120, description: "This bench sucks")
Bench.create(lat: 37, lng: 121, description: "This is a nice bench")
Bench.create(lat: 37, lng: 122, description: "This is a new bench")
Bench.create(lat: 38, lng: 122, description: "This is a broken bench")
Bench.create(lat: 38, lng: 119, description: "This is an old bench")
