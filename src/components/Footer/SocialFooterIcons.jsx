
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const SocialFooterIcons = () => {
    return (
        <div>
            <ul className='flex gap-5 mt-3'>
                <li className='cursor-pointer'>
                
                    <a href="https://www.facebook.com"  aria-label="Read more about Triogen Export on Facebook">   <FaFacebookF className='text-2xl  text-blue-400' /></a>
                </li>
                <li className='cursor-pointer'>
              
                    <a href="https://www.instagram.com"  aria-label="Read more about Triogen Export on Instagram"> <AiFillInstagram className='text-2xl text-blue-400' /></a>
                </li>
                <li className='cursor-pointer'>
                  
                    <a href="https://www.linkedin.com"  aria-label="Read more about Triogen Export on LinkdIn"><BsLinkedin className='text-2xl text-blue-400' /></a>
                </li>
                <li className='cursor-pointer'>
                   
                    <a href="https://www.youtube.com"  aria-label="Read more about Triogen Export on Youtube" > <BsYoutube className='text-2xl text-blue-400' /></a>
                </li>
            </ul>
        </div>
    );
};

export default SocialFooterIcons;