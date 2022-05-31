class City < ApplicationRecord
    validates :name, uniqueness: true
    has_many :views
    has_many :season_cities, dependent: :destroy
    has_many :seasons, through: :season_cities
    has_many :style_cities, dependent: :destroy
    has_many :styles, through: :style_cities

    has_one_attached :symbol_image  do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 200]
    end
end
