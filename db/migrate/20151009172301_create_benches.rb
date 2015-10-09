class CreateBenches < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.text :description, null: false
      t.integer :lat, null: false
      t.integer :lng, null: false

      t.timestamps null: false
    end
  end
end
