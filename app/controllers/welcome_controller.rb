class WelcomeController < ApplicationController
  def index
    @snapple_facts = SnappleFact.all
    render :index
  end
end
