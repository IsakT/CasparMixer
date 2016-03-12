class AdminCaspar < Router

	# *********SET CASPAR IP****************

	get "/hi" do 
		var = ENV['CASPARIP']
		"Hello World! #{var}"		
	end

	get "/test" do
		
		caspar_ip = ENV['CASPARIP']

		# data_yml = YAML.load_file('db/brackets.yml')

	    # button_data = []
	    # data_yml.each do |f|
	    #   button_data.push(f)
	    # end

		erb :'Graphics' , layout: :'layout/index', :locals => {casparIP: caspar_ip}
	end

	post "/update/caspar_ip" do
		
		new_ip = params[:caspar_ip]

	    ENV['CASPARIP'] = new_ip

		# erb :'Graphics' , layout: :'layout/index', :locals => {casparIP: ENV['CASPARIP']}

	end

	# ************BUTTON DATA*************

	get "/get/button_data" do

		data_yml = YAML.load_file('db/graphic_buttons/'+params[:id]+'.yml')

		if data_yml 
			button_data = []
		    data_yml.each do |f|
		      button_data.push(f)
		    end

		    content_type :yaml
	    	button_data.to_yaml

		else 
			"No data"
		end

	end

	post "/update/button_data" do
		
		# Create a hash with the parameters, and add an ID to each.
	    button_data_hash = { button_name: [params[:button_name]], template: [params[:template]], button_id: [params[:button_id]], f0: [params[:f0]], f1: [params[:f1]], f2: [params[:f2]], f3: [params[:f3]], f4: [params[:f4]], f5: [params[:f5]], f6: [params[:f6]]}

	    File.open('db/graphic_buttons/'+params[:button_id]+'.yml', "w") {|f| f.write(button_data_hash.to_yaml)}

	end 


end