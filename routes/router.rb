class Router < Sinatra::Base

configure :production do
    ENV['CASPARIP']="85.230.107.27"
end



	configure :development do
	     enable :logging
	     ENV['CASPARIP']="192.168.10.126"
	     ENV['SESSION_SECRET']="Nfoiyafljnaskuyi/T(&%FYgliuesgf)"
	end

	# configure :development do
	#      enable :logging
	#      ENV['CASPARIP']="127.0.0.1"
	#      ENV['SESSION_SECRET']="Nfoiyafljnaskuyi/T(&%FYgliuesgf)"
	# end

  helpers Helper::CasparConnect
  helpers Helper::CasparXml

end