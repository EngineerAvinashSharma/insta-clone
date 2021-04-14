import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className="post">
            <h3>UserName</h3>

            {/*Image*/}
            <img className="post_img"
                src="https://www.unicef.org/pakistan/sites/unicef.org.pakistan/files/styles/press_release_feature/public/AZ_WASH_Punjab_132.JPG?itok=IKtIyOuR"
            />
            {/*userName + caption*/}
            <h4 >UserName:caption</h4>
        </div>
    )
}

export default Post
