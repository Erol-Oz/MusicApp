import Navbar from "./Navbar"
export default {
    title: "Components/Navbar",
    component: Navbar,
  }
  
  const Template = args => <Navbar {...args} />
  
  export const White = Template.bind({})
  White.args = {
    backgroundColor: "white",
    color:"black",
    border:"1px solid gray",
    justifyContent:"space-evenly"
  }
  
  export const Gray = Template.bind({})
  Gray.args = {
    backgroundColor: "gray",
    border:"1px solid gray",
    color:"white",
    borderRadius:"0px",
    justifyContent:"space-around"
   
    
  }
  
  export const Black = Template.bind({})
  Black.args = {
    backgroundColor: "black",
    color:"white",
    border:"1px solid gray"
  }
  
  export const Grey = Template.bind({})
  Grey.args = {
    backgroundColor: "grey",
    color:"white",
    border:"1px solid gray"
  
  }
  
  export const White2 = Template.bind({})
  White2.args = {
    backgroundColor: "White",
    border:"1px solid gray",
    color:"black",
    textAlign:"left"
  }