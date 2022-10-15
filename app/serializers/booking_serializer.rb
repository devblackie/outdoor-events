class BookingSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :email, :pick_up_location, :phone_number, :number_of_slots, :event_id
end
