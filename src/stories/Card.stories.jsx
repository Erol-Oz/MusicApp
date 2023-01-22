import Card from "./Card"

export default {
  title: "Components/Card",
  component: Card,
}

const Template = args => <Card {...args} />

export const White = Template.bind({})
White.args = {
  backgroundColor: "white",
  color:"black",
  border:"1px solid gray"
}

export const Gray = Template.bind({})
Gray.args = {
  backgroundColor: "gray",
  border:"1px solid gray",
  color:"white",
  borderRadius:"0px"
 
  
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

