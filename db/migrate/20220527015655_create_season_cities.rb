class CreateSeasonCities < ActiveRecord::Migration[6.1]
  def change
    create_table :season_cities do |t|
      t.integer :city_id
      t.integer :season_id

      t.timestamps
    end
  end
end
