class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :image_url
      t.string :location
      t.integer :price
      t.integer :user_id

      t.timestamps
    end
  end
end
