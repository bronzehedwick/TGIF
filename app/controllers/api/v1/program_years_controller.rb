class Api::V1::ProgramYearsController < ApplicationController  
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def create
    # binding.pry
    yearParams = params["_json"]
    selectedYear = ProgramYear.find(yearParams)
    @weeks = selectedYear.weeks
    @episodes = []
    @weeks.each do |week|
      @episodes << Episode.where(original_air_date: week.friday_date)
    end
    # binding.pry
    render json: { weekData: @weeks, episodeData: @episodes }
  end
end