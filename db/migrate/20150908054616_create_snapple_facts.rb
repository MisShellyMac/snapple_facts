class CreateSnappleFacts < ActiveRecord::Migration
  def change
    create_table :snapple_facts do |t|
      t.string :fact

      t.timestamps null: false
    end
  end
end
