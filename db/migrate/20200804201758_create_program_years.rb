class CreateProgramYears < ActiveRecord::Migration[5.2]
  def change
    create_table :program_years do |t|
      t.string :name, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
    end
  end
end
