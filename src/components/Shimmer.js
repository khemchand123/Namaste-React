const Shimmer = () => {
    return (
         <>  
            <div className="flex flex-wrap">
                {
                  Array(15).fill("").map((element, index)=>
                    <div key={index} className="h-80 w-72 bg-gray-300 m-3 p-2"></div>
                  ) 
                }
            </div>
         </>
    );
}

export default Shimmer;