class WelcomeController < ApplicationController
  def index
    @snapple_facts = SnappleFact.all
    render :index
  end

  def random
    # @random = SnappleFact.sample(10)
    @snapple_facts = SnappleFact.first
  end
end
