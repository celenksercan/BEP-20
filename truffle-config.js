module.exports = {


  networks: {
   
    development: {
     host: "127.0.0.1",     
     port: 8545,         
     network_id: "666", 
  },


  mocha: {

  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.4",
      docker: false,       
      settings: {          
       optimizer: {
         enabled: true,
         runs: 200
       }
      }
    }
  }
}
