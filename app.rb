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
  error Sinatra::NotFound do
    status 404
  end

  	use Router
 	use AdminCaspar


end