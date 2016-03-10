class Router < Sinatra::Base

	configure :development do
	     enable :logging
	     ENV['CASPARIP']="192.168.10.126"
	     ENV['SESSION_SECRET']="Nfoiyafljnaskuyi/T(&%FYgliuesgf)"
	end

  helpers Helper::CasparConnect
  helpers Helper::CasparXml

end