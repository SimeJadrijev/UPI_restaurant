import c from '@styles/landingPage.module.css';
import FacebookIcon from '@assets/images/socialMedia/facebook.svg';
import TwitterIcon from '@assets/images/socialMedia/twitter.svg';
import LinkedInIcon from '@assets/images/socialMedia/linkedin.svg';
import YoutubeIcon from '@assets/images/socialMedia/yt.svg';

export default function Footer(){
    return(
        <footer>
            <div className={`container ${c.footerWrapper}`}>
                <div className={c.socialMedia}>
                    <a href="#"><img src={FacebookIcon} alt="facebook" /></a>
                    <a href="#"><img src={TwitterIcon} alt="twitter" /></a>
                    <a href="#"><img src={LinkedInIcon} alt="youtube" /></a>
                    <a href="#"><img src={YoutubeIcon} alt="linkedin" /></a>

                </div>
                <div className={c.contactFooter}>
                    <a href="#">244-5333-7783</a>
                    <a href="#">hello@food.com</a>
                    <a href="#">press@food.com</a>
                    <a href="#">contact@food.com</a>
                </div>
            </div>            
        </footer>
    );
} 