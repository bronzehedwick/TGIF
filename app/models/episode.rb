class Episode < ApplicationRecord
  validates :show, presence: true
  validates :name, presence: true
  validates :episode_num, presence: true
  validates :season, presence: true
  validates :original_air_date, presence: true
  validates :synopsis, presence: true

  belongs_to :show
  belongs_to :program_year
end