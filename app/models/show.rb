class Show < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :image_url, presence: true

  has_many :episodes
end