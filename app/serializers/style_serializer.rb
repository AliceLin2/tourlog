class StyleSerializer < ActiveModel::Serializer
  attributes :id, :key, :text, :value, :feature

  has_many :cities
end
