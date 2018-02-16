class DocsController < ApplicationController

  def index
    render file: Rails.public_path.join("/",params[:doc_page]), layout: true
  end

end
