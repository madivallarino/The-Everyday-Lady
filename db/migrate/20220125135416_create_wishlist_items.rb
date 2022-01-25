class CreateWishlistItems < ActiveRecord::Migration[6.1]
  def change
    create_table :wishlist_items do |t|
      t.string :name
      t.string :image
      t.integer :price
      t.belongs_to :wish_list
      t.timestamps
    end
  end
end
