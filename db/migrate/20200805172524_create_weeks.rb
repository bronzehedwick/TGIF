class CreateWeeks < ActiveRecord::Migration[5.2]
  def change
    create_table :weeks do |t|
      t.integer :week_num, null: false
      t.date :friday_date, null: false

      t.belongs_to :program_year, null: false
    end
  end
end
