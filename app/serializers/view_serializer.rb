class ViewSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :ticket, :hour, :overview, :scene, :view_image

  def view_image
    if object.view_image.attached?
      {
        url: rails_blob_url(object.view_image)
      }
    end
  end
end
