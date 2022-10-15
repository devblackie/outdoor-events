class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :fullname
      t.string :email
      t.string :pick_up_location
      t.integer :phone_number
      t.integer :number_of_slots
      t.integer :event_id

      t.timestamps
    end
  end
end
