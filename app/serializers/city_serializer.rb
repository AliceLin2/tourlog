class CitySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :country, :area
  has_many :seasons
  has_many :styles
  has_many :views
end
