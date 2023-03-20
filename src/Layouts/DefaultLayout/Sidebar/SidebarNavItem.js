import NavItem from "./navItem";


function NavItems({items = []}) {
   const renderItem = () =>{
     return items.map((item, index) => {
         return (
           <NavItem key ={index} data = {item} />
           )
         }
      )
   }

    return (
        <>
              {renderItem()}
        </>
      );
}

export default NavItems;