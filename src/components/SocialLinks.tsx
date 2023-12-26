import {GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon} from "@/components/SocialIcons";
import {SocialLink} from "@/components/SocialLink";
import {LuGithub, LuLinkedin, LuMail, LuTwitter} from "react-icons/lu";
import {FC} from "react";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

export const SocialLinks: FC<{ noText?: boolean}> = ({ noText}) => (
  <>

    <SocialLink href="twitter.com/caelin_sutch" icon={FaTwitter}>
      {
        !noText && (
          <>
            Follow on Twitter
          </>
        )
      }
    </SocialLink>
    <SocialLink href="github.com/caelinsutch" icon={FaGithub} >

      {
        !noText && (
          <>
            Follow on Github
          </>
        )
      }    </SocialLink>
    <SocialLink href="linkedin.com/in/caelinsutch" icon={FaLinkedin} >

      {
        !noText && (
          <>
            Follow on Linked
          </>
        )
      }    </SocialLink>
    <SocialLink
      href="mailto:caelin@trycue.ai"
      icon={LuMail}
    >

      {
        !noText && (
          <>
            caelin [at] trycue.ai
          </>
        )
      }
    </SocialLink></>
)