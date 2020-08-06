class Api::V1::ProgramYearsController < ApplicationController  
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def create
    # binding.pry
    yearParams = params["_json"]
    selectedYear = ProgramYear.find(yearParams)
    @weeks = selectedYear.weeks
    render json: { weekData: @weeks }
  end
end