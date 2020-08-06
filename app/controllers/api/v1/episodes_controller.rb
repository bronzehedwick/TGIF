class Api::V1::EpisodesController < ApplicationController  
  def index
    @episodes = Episode.all
    render json: { episodeData: @episodes }
  end
end