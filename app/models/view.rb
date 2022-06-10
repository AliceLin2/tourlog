class View < ApplicationRecord
    belongs_to :city
    has_many :comments
    
    has_many_attached :images do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 200]
    end
end
