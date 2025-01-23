import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            In the vast corridors of the digital castle, I stand as a coder and conjurer, weaving spells of innovation in the glow of my screen. JavaScript is my wand, channeling raw power to shape seamless realms, while React and Next.js serve as my trusted companions—ancient tomes of magic that guide me in crafting portals for users to traverse.
            {" "}
            <br />
            <br />

            I tread the hallowed grounds of Firebase and MongoDB, enchanted vaults where data is guarded like treasures in Gringotts. With GSAP’s charms, I summon motion to the still, making my creations dance like enchanted quills. From StellarCode to StellarPin, each project is a horcrux of my creativity, imbued with a part of my soul.
            <br />
            <br />

            But my journey does not end within the familiar walls of Hogwarts. I dare to explore the Forbidden Forest of blockchain, where secrets lie veiled in shadows, and the Dark Arts of AI, a power as dangerous as it is transformative. I strive to master these forces, bending them to my will to shape a future that is as captivating as it is magical.

            <br />
            <br />

            The digital world is my Hogwarts, its code my incantations, and every challenge a test of skill and courage. Join me as I write my own chapter in this ever-expanding book of magic and technology.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=codersunny812&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="codersunny812"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=codersunny812&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,firebase,git,github,graphql,html,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,vite,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn,bitbucket,c,express,java,latex,materialui,postman,prisma,swift,ts`}
            alt="Codersunny812"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com?user=codersunny812&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="codersunny812"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codERSunny812/complete-webdevelopment.git"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=codersunny812&repo=complete-webdevelopment&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
