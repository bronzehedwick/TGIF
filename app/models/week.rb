class Week < ApplicationRecord
  validates :week_num, presence: true
  validates :friday_date, presence: true
  validates :slot_8pm, presence: true
  validates :slot_830pm, presence: true
  validates :slot_9pm, presence: true
  validates :slot_930pm, presence: true

  belongs_to :program_year
end