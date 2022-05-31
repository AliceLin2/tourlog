class Season < ApplicationRecord
    has_many :season_cities
    has_many :cities, through: :season_cities
end
