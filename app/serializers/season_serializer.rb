class SeasonSerializer < ActiveModel::Serializer
  attributes :id, :key, :text, :value

  has_many :cities
end
