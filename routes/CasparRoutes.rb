class AdminCaspar < Router	

	get "/hi" do 
		var = ENV['CASPARIP']
		"Hello World! #{var}"		
	end

	get "/test" do
			

		erb :'Graphics' , layout: :'layout/index'
	end

	# *****************************
	# |			 IP               |
	# *****************************

	get "/get/caspar_ip" do

		casparIP_yml = YAML.load_file('db/casparIP.yml')

		if casparIP_yml 

	    	casparIP_yml.to_json

		else 
			"Not set"
		end

	end

	post "/update/caspar_ip" do
		
		# Create a hash with the parameters, and add an ID to each.
	    caspar_ip_hash = { caspar_ip: params[:caspar_ip]}

	    File.open('db/casparIP.yml', "w") {|f| f.write(caspar_ip_hash.to_yaml)}

	end

	# *****************************
	# |		 BUTTON DATA          |
	# *****************************


	get "/get/button_data" do

		data_yml = YAML.load_file('db/graphic_buttons/'+params[:id]+'.yml')

		if data_yml 

	    	data_yml.to_json

		else 
			"No data"
		end

	end

	post "/update/button_data" do
		
		# Create a hash with the parameters, and add an ID to each.
	    button_data_hash = { button_name: [params[:button_name]], template: [params[:template]], button_id: [params[:button_id]], f0: [params[:f0]], f1: [params[:f1]], f2: [params[:f2]], f3: [params[:f3]], f4: [params[:f4]], f5: [params[:f5]], f6: [params[:f6]]}

	    File.open('db/graphic_buttons/'+params[:button_id]+'.yml', "w") {|f| f.write(button_data_hash.to_yaml)}

	end 

	# *****************************
	# | 	     CASPAR 	      |
	# *****************************



end