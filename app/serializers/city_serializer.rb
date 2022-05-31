class CitySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :country, :area, :symbol_image

  def symbol_image
    url_for(object.symbol_image) if object.symbol_image.attached?
  end

  has_many :views
end
