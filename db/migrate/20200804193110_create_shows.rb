class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
