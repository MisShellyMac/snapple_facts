class AddNumberidToSnappleFacts < ActiveRecord::Migration
  def change
    add_column :snapple_facts, :numberid, :integer
  end
end
