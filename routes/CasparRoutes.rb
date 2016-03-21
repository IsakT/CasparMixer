class AdminCaspar < Router	

	get "/hi" do 
		var = ENV['CASPARIP']
		"Hello World! #{var}"		
	end

	get "/graphic" do
			

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

		data_yml = YAML.load_file('db/graphic_buttons/'+params[:button_id]+'.yml')

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

	post "/delete/button_data/?" do
		
		# Create a hash with the parameters, and add an ID to each.
	    button_data_hash = { button_name: '', template: '', button_id: [params[:button_id]], f0: '', f1: '', f2: '', f3: '', f4: '', f5: '', f6: ''}

	    File.open('db/graphic_buttons/'+params[:button_id]+'.yml', "w") {|f| f.write(button_data_hash.to_yaml)}

	end 

	# *****************************
	# | 	     CASPAR 	      |
	# *****************************

	get '/Caspar/CG_ADD' do

		template = params[:template]
		layer = params[:layer]

		field0 = params[:f0]
		field1 = params[:f1]
		field2 = params[:f2]
		field3 = params[:f3]
		field4 = params[:f4]
		field5 = params[:f5]
		field6 = params[:f6]


		f0 = casparxml("f0","text",field0)
		f1 = casparxml("f1","text",field1)
		f2 = casparxml("f2","text",field2)
		f3 = casparxml("f3","text",field3)
		f4 = casparxml("f4","text",field4)
		f5 = casparxml("f5","text",field5)
		f6 = casparxml("f6","text",field6)

		if template
			cgconnect('CG 1 ADD 1 '+ template + " 0 " + beginxml + f0 + f1 + f2 + f3 + f4 + f5 + f6 + endxml)
		end

	end	

	get '/Caspar/CG_PLAY' do

		layer = params[:layer]

		cgconnect('CG 1 PLAY 1')

		# if layer == "" || layer == nil
		#  	cgconnect('CG 1 PLAY ' + 1)
		# else
		# 	cgconnect('CG 1 PLAY ' + layer)
		# end

	end	

	get '/Caspar/CG_STOP' do

		layer = params[:layer]

		cgconnect('CG 1 STOP 1')

		# if layer == "" || layer == nil
		#  	cgconnect('CG 1 STOP ' + 1)
		# else
		# 	cgconnect('CG 1 STOP ' + layer)
		# end

	end	

	get '/Caspar/CG_NEXT' do

		layer = params[:layer]

		cgconnect('CG 1 NEXT 1')

		# if layer == "" || layer == nil
		#  	cgconnect('CG 1 NEXT ' + 1)
		# else
		# 	cgconnect('CG 1 NEXT ' + layer)
		# end

	end	

	get '/Caspar/CG_REMOVE' do

		layer = params[:layer]

		cgconnect('CG 1 REMOVE 1')

		# if layer == "" || layer == nil
		#  	cgconnect('CG 1 REMOVE ' + 1)
		# else
		# 	cgconnect('CG 1 REMOVE ' + layer)
		# end

	end	




end