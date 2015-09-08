# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'

snapple_facts = CSV.read("seed_csv/facts.csv", { encoding: "UTF-8", headers: true, return_headers: true})

snapple_facts.each do |row|
  snapple_fact = {}
  snapple_fact[:numberid] = row[0]
  snapple_fact[:fact] = row[1]

  SnappleFact.create(snapple_fact)
end
