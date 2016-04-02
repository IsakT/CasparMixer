class AdminCaspar < Router	

	get "/hi" do 
		var = ENV['CASPARIP']
		"Hello World! #{var}"		
	end

	get "/graphic" do
			
		erb :'Graphics' , layout: :'layout/index'
	end

	get "/mixer" do

		erb :'Mixer' , layout: :'layout/Mixer-layout'

	end

	# *****************************
	# |			 IP               |
	# *****************************

	get "/get/caspar_ip" do

		casparIP_yml = YAML.load_file('db/casparIP.yml')

		if casparIP_yml

	    	casparIP_yml.to_json

		else
			{:caspar_ip => "Not set"}.to_json
		end

	end

	get "/update/caspar_ip" do

		ENV['CASPARIP'] = params[:caspar_ip]
		
		# Create a hash with the parameters, and add an ID to each.
	    caspar_ip_hash = { caspar_ip: params[:caspar_ip]}

	    File.open('db/casparIP.yml', "w") {|f| f.write(caspar_ip_hash.to_yaml)}

	end

	# *****************************
	# |		 BUTTON DATA          |
	# *****************************


	get "/get/button_data" do

		data_yml = YAML.load_file('db/'+params[:db]+'/'+params[:button_id]+'.yml')

		if data_yml 

	    	data_yml.to_json

		else 
			"No button data.".to_json
		end

	end

	post "/update/button_data" do

		layer = params[:layer]
		button_data_hash = Hash.new

		if params[:db] == "graphic_buttons"
	    	button_data_hash = { button_name: params[:button_name], template: params[:template], button_id: params[:button_id], layer: layer, f0: params[:f0], f1: params[:f1], f2: params[:f2], f3: params[:f3], f4: params[:f4], f5: params[:f5], f6: params[:f6]}
	    
	    elsif params[:db] == "mixer_buttons"
	    	button_data_hash = { button_name: params[:button_name], resource: params[:resource], button_id: params[:button_id]}
		end

	    File.open('db/'+params[:db]+'/'+params[:button_id]+'.yml', "w") {|f| f.write(button_data_hash.to_yaml)}

	    return "Message from update route".to_json

	end 

	post "/delete/button_data/?" do
		
		button_data_hash = Hash.new

		if params[:db] == "graphic_buttons"
		    button_data_hash = { button_name: '', template: '', button_id: params[:button_id], layer: '1', f0: '', f1: '', f2: '', f3: '', f4: '', f5: '', f6: ''}
		
		elsif params[:db] == "mixer_buttons"
			button_data_hash = { button_name: '', resource: '', button_id: params[:button_id] }
		end

	    File.open('db/'+params[:db]+'/'+params[:button_id]+'.yml', "w") {|f| f.write(button_data_hash.to_yaml)}

	end 

	# *****************************
	# | 	     CASPAR	    	  |
	# *****************************

	get '/Caspar/Command' do

		command = params[:command]
		channel = params[:channel]
		layer = params[:layer] || ""
		file = params[:file] || ""
		effect = params[:effect] || ""
		duration = params[:duration] || ""
		animation = params[:animation] || ""
		parameters = params[:parameters] || ""

		cgconnect("#{command} #{channel}-#{layer} #{file} #{effect} #{duration} #{animation} #{parameters}")

	end


	# *****************************
	# | 	     CASPAR CG	      |
	# *****************************

	get '/Caspar/CG_ADD' do

		autoplay = params[:autoplay]

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
			cgconnect('CG 1 ADD '+ layer +" "+ template + " "+ autoplay +" " + beginxml + f0 + f1 + f2 + f3 + f4 + f5 + f6 + endxml)
		end

	end	

	get '/Caspar/CG_PLAY' do

		layer = params[:layer]

		cgconnect('CG 1 PLAY ' + layer)

	end	

	get '/Caspar/CG_STOP' do

		layer = params[:layer]

		cgconnect('CG 1 STOP ' + layer)

	end	

	get '/Caspar/CG_NEXT' do

		layer = params[:layer]

		cgconnect('CG 1 NEXT ' + layer)

	end	

	get '/Caspar/CG_REMOVE' do

		layer = params[:layer]

		cgconnect('CG 1 REMOVE ' + layer)

	end	

	get '/Caspar/CG_CLEAR' do

		cgconnect('CG 1 CLEAR')

	end	

	get '/Caspar/CG_UPDATE' do

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

		cgconnect('CG 1 UPDATE ' + layer + " " + beginxml + f0 + f1 + f2 + f3 + f4 + f5 + f6 + endxml)

	end	


end