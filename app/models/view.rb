class View < ApplicationRecord
    belongs_to :city

    has_one_attached :view_image do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 100]
    end
    
end
