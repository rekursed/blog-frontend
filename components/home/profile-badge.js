import Link from "next/link";
import badgeStyles from "./profile-badge.module.scss"


class ProfileBadge extends React.Component {

    render() {
        return (
            <div >
                <div className={`card ${badgeStyles.cardcontainer}`}>
                    <div className={`card-image`}>
                        <figure className="image ">
                            <img className="is-rounded" src="/profile_image.png" alt="Mohammad Rakibul hassan"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content is-center">
                            I am <b>Open</b> to a new Challange.
                            <br/>
                            <a className={`button`}>Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileBadge
