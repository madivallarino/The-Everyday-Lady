class ProductJoin < ActiveRecord::Migration[6.1]
  def change
    create_table :productjoin do |t|
      t.belongs_to :user
      t.belongs_to :product
      t.timestamps
    end
  end
end
