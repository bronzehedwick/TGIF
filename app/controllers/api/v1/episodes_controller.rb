class Api::V1::EpisodesController < ApplicationController  
  def index
    @episodeCount = Episode.count
    @showCount = Show.count
    render json: { episode_count: @episodeCount, show_count: @showCount }
  end

  def show
  # binding.pry
  @episodes = Show.find(params[:id]).episodes
  # binding.pry
  render json: { episodeData: @episodes }
  end
end