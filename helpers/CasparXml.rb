module Helper
  module CasparXml
    def casparxml(id,type,data)
      monkey = '<componentData id=\"' + id + '\"><data id=\"' + type +'\" value=\"' + data + '\"></data></componentData>'
    end

    def beginxml
      beginxml = 			 '"<templateData>'
    end

    def endxml
      endxml = '</templateData>"'
    end

  end
end
