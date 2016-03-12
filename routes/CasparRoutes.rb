class AdminCaspar < Router

	# *********SET CASPAR IP****************

	get "/hi" do 
		var = ENV['CASPARIP']
		"Hello World! #{var}"		
	end

	get "/test" do
		
		caspar_ip = ENV['CASPARIP']

		erb :'Graphics' , layout: :'layout/index', :locals => {casparIP: caspar_ip}
	end

	post "/test?" do
		
		new_ip = params[:caspar_ip]

	    ENV['CASPARIP'] = new_ip

		# erb :'Graphics' , layout: :'layout/index', :locals => {casparIP: ENV['CASPARIP']}

	end

	# *************************

	


end