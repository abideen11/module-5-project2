class CreateEntrepreneurs < ActiveRecord::Migration[6.0]
  def change
    create_table :entrepreneurs do |t|
      t.string :name
      t.string :country
      t.string :continent
      t.string :reason 
      t.integer :amount 
      t.string :img_url

      t.timestamps
    end
  end
end
