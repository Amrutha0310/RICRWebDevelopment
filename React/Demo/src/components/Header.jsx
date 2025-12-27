import React from 'react'




//functional components->arrow function it acts like function 
const Header = () => {
    return(
        <>
             <div className="d-flex justify-content-between align-items-center p-2 bg-primary">
                 <h3>My Website</h3>
                 <div className="d-flex gap-3">
                    <Link to={"/"}className="text-decoration-none"></Link>
                 </div>
             </div>
        </>
        
    )
};
export default Header;