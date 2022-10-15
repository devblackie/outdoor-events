class EventSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :location, :price, :user_id
end
