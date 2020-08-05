class Week < ApplicationRecord
  validates :week_num, presence: true
  validates :friday_date, presence: true

  belongs_to :program_year
end