class CreateStyles < ActiveRecord::Migration[6.1]
  def change
    create_table :styles do |t|
      t.string :key
      t.string :text
      t.string :value
      t.string :feature

      t.timestamps
    end
  end
end
