class ViewSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :ticket, :hour, :overview, :scene, :city_id, :images
  has_many :comments
  
  def images
    return unless object.images.attached?

    object.images.map do |image|
      image.blob.attributes
        .slice('id')
        .merge(url: image_url(image))
    end
  end

  def image_url(image)
    url_for(image)
  end

end
