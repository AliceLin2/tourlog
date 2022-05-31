class SeasonCity < ApplicationRecord
    belongs_to :season
    belongs_to :city
end
