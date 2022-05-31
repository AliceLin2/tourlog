class Style < ApplicationRecord
    validates :value, uniqueness: true
    has_many :style_cities
    has_many :cities, through: :style_cities

end
