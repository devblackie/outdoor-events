class EventsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


  def index 
      r = Event.all
      render json: r
  end

  def show
      r = Event.find(params[:id])
  end

  def create
      event = Event.create!(event_params)
      render json: event,status: :ok
  end

  def update
      event = Event.find_by(id: params[:id])
      event.update(event_params)
      render json: event
  end

  def destroy
      event = Event.find(params[:id])
      event.destroy
      head :no_content
  end

  

  private
  def event_params
      params.permit(:image_url, :location, :price, :user_id)
  end

  def render_not_found_response
      render json: { error: "User not found" }, status: :not_found
  end

  def render_unproccessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
