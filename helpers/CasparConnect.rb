module Helper
  module CasparConnect
    def cgconnect command
       socket = TCPSocket.new(ENV['CASPARIP'], 5250)
       socket.write(command+"\r\n")
       line = socket.readline[0..2].to_i
       socket.close
       return line
    end
  end
end
