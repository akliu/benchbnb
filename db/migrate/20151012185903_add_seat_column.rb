class AddSeatColumn < ActiveRecord::Migration
  def change
    add_column :benches, :seating, :integer
  end
end
