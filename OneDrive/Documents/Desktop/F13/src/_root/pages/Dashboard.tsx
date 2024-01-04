import PostCard from "../../components/shared/PostCard"

const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="dash-container">
        <div className="dash-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Dashboard Renders</h2>
          
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              
                <li key="" className="flex justify-center w-full">
                  <PostCard />
                </li>
            </ul>
        </div>
      </div>

      
    </div>
  )
}

export default Dashboard