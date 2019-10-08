class CreateAgreements < ActiveRecord::Migration[6.0]
  def change
    create_table :agreements do |t|
      t.integer :entrepreneur_id
      t.integer :user_id
      t.integer :amount

      t.timestamps
    end
  end
end
