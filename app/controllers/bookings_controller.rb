class BookingsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity_response

  def create
      booking = Booking.create!(attendee_params)
      render json:{success:'Successfully submitted.'}, status: :created
  end
  
  
  private
  def booking_params
      params.permit(:fullname, :email, :pick_up_location, :phone_number ,:number_of_slots, :event_id)
  end
  
  def render_unproccessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
