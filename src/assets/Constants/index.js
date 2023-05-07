export const navLinks = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "add a Song",
      title: "Add a Song",
    },
    {
      id: "make a quote",
      title: "Make A Quote",
    },
    {
      id: "about",
      title: "About",
    },
  ];

    export const FooterLinks = [
      [{
        id : "quote",
        title : "Make a Quote",
        link : "/Make-a-quote",
      },
      {
        id : "add a song",
        title : "Add A Song",
        link : "/Add-a-song",
      },
      {
        id : "account",
        title : "Account",
        link : "/Account",
      },
      {
        id : "privacy policy",
        title : "Privacy Policy",
        link : "/Privacy-Policy",
      }],[
      {
        id : "contact us",
        title : "Contact Us",
        link : "/Contact",
      },
      {
        id : "lookup",
        title : "LookUp",
        link : "/LookUp",
      },
      {
        id : "about",
        title : "About",
        link : "/About",
      },

      {
        id : "log in",
        title : "Log In",
        link : "/LogIn",
      },]
 
    ]

    import { insta,fb,twitter,euterpe } from "..";

    export const SocialMedia = [
      {
        id:"insta",
        logo:insta,
        link:"instagram.com/euterpe",
      },
      {
        id:"fb",
        logo:fb,
        link:"facebook.com/euterpe",
      },
      {
        id:"twitter",
        logo:twitter,
        link:"Twitter.com/euterpe",
      },
      {
        id:"euterpe",
        logo:euterpe,
        link:"Twitter.com/euterpe",
      },
    ]

    const genre=["Pop","R&B/Soul","Rap","Rock","Electronic/Dance","Blues","Jazz","Reggae","Country","Chaabi"]

    export const inputs = [
      {
        id:"songname",
        label:"Song Name",
        required:true,
        dropdown:false,
        add:false
      },
      {
        id:"artist",
        label:"Artist",
        required:true,
        dropdown:false,
        add:false
      },
      {
        id:"genre",
        label:"Main Genre",
        required:true,
        dropdown:true,
        add:false,
        Genres:genre
      },
      {
        id:"features",
        label:"Features",
        required:false,
        dropdown:false,
        add:true
      }
    ]

export const Sahdowstyle = (option)=>{
  if(option === "active"){
    return ("border-black border-st bg-black text-white sm:hover:tracking-wider hover:transition-all transition-all");
  }
  if(option === "circle"){
    return ("border-black border-st  hover:transition-all transition-all hover:shadow-[-4px_4px_0px_rgba(0,0,0,1)] shadow-[-2px_2px_0px_rgba(0,0,0,1)]");
  }
  if (option){
    return ("border-black border-st shadow-neo2 hover:transition-all transition-all hover:shadow-neo3");
  }
 return ("border-black border-st shadow-neo2 hover:transition-all transition-all hover:shadow-neoH");
}

export const Tools = [
  {
    id:"verse",
    title:"Verse",
  },
  {
    id:"pre",
    title:"Pre-Chorus",
  },
  {
    id:"chorus",
    title:"Chorus",
  },
  {
    id:"bridge",
    title:"Bridge",
  },
  {
    id:"hook",
    title:"Hook",
  },
  {
    id:"br-d",
    title:"Breakdown",
  },
  {
    id:"int",
    title:"Intro",
  },
  {
    id:"out",
    title:"Outro",
  },
]