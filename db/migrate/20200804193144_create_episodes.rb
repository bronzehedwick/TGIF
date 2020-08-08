class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.belongs_to :show, null: false

      t.string :show_name, null: false
      t.string :name, null: false
      t.integer :episode_num, null: false
      t.integer :season, null: false
      t.date :original_air_date, null: false
      t.text :synopsis, null: false
    end
  end
end
