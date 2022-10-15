class Booking < ApplicationRecord
    validates :fullname , :email , :pick_up_location ,:number_of_slots ,presence: true

    has_many :events
end
