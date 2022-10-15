class Event < ApplicationRecord
    belongs_to :user
 
    validates :image_url ,:location ,:price , presence: true
 
 end
