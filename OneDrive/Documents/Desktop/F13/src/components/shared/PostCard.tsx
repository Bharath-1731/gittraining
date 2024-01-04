import { Link } from 'react-router-dom'
import ProfileSvg from "/assets/icons/profile-placeholder.svg";



const PostCard = () => {
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to="">
            <img
              src={ProfileSvg}
              alt="creator"
              className="w-12 lg:h-12 rounded-full"
            />
          </Link>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular ">
                
              </p>
              •
              <p className="subtle-semibold lg:small-regular">
                
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
  )
}

export default PostCard;