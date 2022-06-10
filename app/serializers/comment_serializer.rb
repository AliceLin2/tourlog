class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :view_id, :user_id, :created_at

  belongs_to :user
end
