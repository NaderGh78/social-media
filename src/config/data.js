//stories imgs
import Storie1 from "../assets/storie1.jpg";
import Storie2 from "../assets/storie2.jpg";
import Storie3 from "../assets/storie3.jpg";
import Storie4 from "../assets/storie4.jpeg";

//post imgs
import Post1 from "../assets/post1.jpg";
import Post3 from "../assets/post3.jpg";

// profile imgs and icons
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import userProfileBg1 from "../assets/top-banner-bg.jpg";
import userProfileBg2 from "../assets/top-banner-bg2.jpg";
import userProfileBg3 from "../assets/top-banner-bg3.jpg";

//comment user imgs
import Comment1 from "../../src/assets/user-comment1.jpg";
import Comment2 from "../../src/assets/user-comment2.jpg";
import Comment3 from "../../src/assets/user-comment3.jpg";

export const StoriesData = [
  {
    id: 1,
    name: "Jhony Deep",
    img: Storie1,
  },
  {
    id: 2,
    name: "Di Caperio",
    img: Storie2,
  },
  {
    id: 3,
    name: "dani devito",
    img: Storie3,
  },
  {
    id: 4,
    name: "Marlone Brando",
    img: Storie4,
  },
];

export const PostsData = [
  {
    postId: 1,
    postUserId: 1,
    postName: "Salim Ahmad",
    postImg: Storie1,
    posTime: "a few sconds ago",
    postDesc: "hello how are you",
    postBg: Post1,
    userProfileBg: userProfileBg1,
    userSocialIcons: [
      FacebookTwoToneIcon,
      LinkedInIcon,
      InstagramIcon,
      PinterestIcon,
      TwitterIcon,
    ],
  },
  {
    postId: 2,
    postUserId: 2,
    postName: "Nour Fathi",
    postImg: Storie3,
    posTime: "one month ago",
    postDesc:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis qui voluptatum facere, quae architecto quis reiciendis est ex neque sequi ratione dolore earum error, minus quo vero laboriosam repellendus at.",
    userProfileBg: userProfileBg2,
    userSocialIcons: [PinterestIcon, TwitterIcon],
  },
  {
    postId: 3,
    postUserId: 3,
    postName: "Ziad Merhi",
    postImg: Storie2,
    posTime: "yesterday",
    postDesc: "hello how are you333",
    postBg: Post3,
    userProfileBg: userProfileBg3,
    userSocialIcons: [LinkedInIcon, TwitterIcon],
  },
  {
    postId: 3,
    postUserId: 3,
    postName: "Ziad Merhi",
    postImg: Storie2,
    posTime: "yesterday",
    postDesc: "Ziad Merhi POST AGAIN",
    postBg: Post3,
    userProfileBg: userProfileBg3,
    userSocialIcons: [LinkedInIcon, TwitterIcon],
  },
  {
    postId: 2,
    postUserId: 2,
    postName: "Nour Fathi",
    postImg: Storie3,
    posTime: "one month ago",
    postDesc: "SECOND POST BY Nour Fathi",
    userProfileBg: userProfileBg2,
    userSocialIcons: [PinterestIcon, TwitterIcon],
  },
];

export const commentsData = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "lebron james",
    userId: 1,
    profilePicture: Comment1,
    commentDate: "15 days ago",
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "lionel messi",
    userId: 2,
    profilePicture: Comment2,
    commentDate: "2 days ago",
  },
  {
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "brad pitt",
    userId: 3,
    profilePicture: Comment3,
    commentDate: "3 hours ago",
  },
];
