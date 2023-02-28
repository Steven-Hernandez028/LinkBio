export const styles = {
 
 heading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "1rem",
    width: "300px",
    height: "300px",
    backgroundColor: "#ffd803",
    borderRadius: "50%",
  
 },

nav:{
  position:" sticky",
  top: 0,
  left: 0,
  bottom: 0,
  width: "200px",
  zIndex:"100000",
  },

  navbar:{
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    width:"300px",
    background: "#078080",
  },
  button:{
    outline: "none",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: "5%",
    left: "15px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "transparent",
  },
ul:{
  padding: "25px",
  position: "absolute",
  top: "100px",
  width: "230px",
  margin: 0,
 
},

li:{
  listStyle: "none",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
},

iconPlaceholder:{
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  flex:"40px 0",
  marginRight: "20px",
},

textPlaceholder:{

  borderRadius: "5px",
  width: "200px",
  height: "20px",
  flex: 1,
},

icon:{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "25px",
},

text:{
  color: "#fef6e4",
}

} as const

  

  

  

  
  