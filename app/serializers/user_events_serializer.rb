class UserEventsSerializer < ActiveModel::Serializer
  attributes :id ,:username

  has_many :events
end
