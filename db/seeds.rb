# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.create(lat: 37.7811254, lng: -122.4114648, description: "This bench sucks")
Bench.create(lat: 37.8, lng: -122.42, description: "This is a nice bench")
Bench.create(lat: 37.5, lng: -122.3, description: "This is a new bench")
Bench.create(lat: 38, lng: -122.7, description: "This is a broken bench")
Bench.create(lat: 36.99, lng: -122, description: "This is an old bench")
