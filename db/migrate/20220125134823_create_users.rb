class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :phoneNumber, default: nil
      t.string :password_digest
      t.boolean :subscribed, default: false
      t.timestamps
    end
  end
end
