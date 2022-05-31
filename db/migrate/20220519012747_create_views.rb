class CreateViews < ActiveRecord::Migration[6.1]
  def change
    create_table :views do |t|
      t.integer :ticket
      t.string :hour
      t.string :overview
      t.string :scene
      t.integer :city_id

      t.timestamps
    end
  end
end
