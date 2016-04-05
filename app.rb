require 'sinatra'
require 'erb'
require 'thin'
require 'require_all'
require 'json'
require 'sinatra/partial'
require 'yaml'
require 'socket'

require_all 'helpers'
require_all 'routes'


class CasparService < Sinatra::Base
  # error Sinatra::NotFound do
  #   status 404
  # end

  # set :casparip, ''
  # set :casparip, '85.230.107.27'
  # set :casparip, '192.168.10.126'
  # set :casparip, '127.0.0.1'

  	use Router
 	use AdminCaspar


end