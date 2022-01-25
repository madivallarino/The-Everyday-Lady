class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image
      t.string :backimage
      t.string :size, default: nil
      t.string :color, default: nil
      t.string :category
      t.string :desc
      t.string :subtype
      t.integer :price
      t.timestamps
    end
  end
end
