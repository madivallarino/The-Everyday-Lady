class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.string :name
      t.integer :quantity
      t.integer :price
      t.string :size, default: nil
      t.string :image
      t.belongs_to :cart
      t.timestamps
    end
  end
end
