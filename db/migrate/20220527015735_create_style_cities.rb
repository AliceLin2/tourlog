class CreateStyleCities < ActiveRecord::Migration[6.1]
  def change
    create_table :style_cities do |t|
      t.integer :city_id
      t.integer :style_id

      t.timestamps
    end
  end
end
