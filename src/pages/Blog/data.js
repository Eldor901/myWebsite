import rus from "../../assests/image/myPhotos/rus.jpg";
import rus1 from "../../assests/image/myPhotos/rus1.jpg";
import rus2 from "../../assests/image/myPhotos/rus2.jpg";
import rus3 from "../../assests/image/myPhotos/rus3.jpg";
import rus4 from "../../assests/image/myPhotos/rus4.jpg";
import rus5 from "../../assests/image/myPhotos/rus5.jpg";
import rus6 from "../../assests/image/myPhotos/rus6.jpg";
import indones from "../../assests/image/myPhotos/indones.jpg";
import indones2 from "../../assests/image/myPhotos/indones2.jpg";
import indones3 from "../../assests/image/myPhotos/indones3.jpg";
import indones4 from "../../assests/image/myPhotos/indones4.jpg";
import indones5 from "../../assests/image/myPhotos/indones5.jpg";
import yg from "../../assests/image/myPhotos/yg.jpg";
import yg2 from "../../assests/image/myPhotos/yg2.jpg";
import yg3 from "../../assests/image/myPhotos/yg3.jpg";

export const data = [
  {
    id: 1,
    img: rus1,
    title: "Life as a student in Russia",
    imgArray: [
      {
        img: rus,
        col: "4",
      },
      {
        img: rus1,
        col: "4",
      },
      {
        img: rus2,
        col: "4",
      },
      {
        img: rus3,
        col: "4",
      },
      {
        img: rus4,
        col: "4",
      },
      {
        img: rus5,
        col: "4",
      },
      {
        img: rus6,
        col: "4",
      },
    ],
    description: `
<h3>Description</h3>
<p>
 Hello. I want to tell a story about  living in Russia. After graduating from the lyceum in Tashkent, I wanted to иу a programmer. My cousin advised me to study in Russia, I myself planned to study at Inha University. After successfully passing the exam. I had a choice to study at Inha University, which is located in Tashkent, or to go  studying to Russia.
 I chose the second option because the university in the field of programming was quite popular, and I also win the scholarship. It was a reason for me to go there.
 At the beginning it was very difficult to adapt new city and generally new culture, but I got used to it very quickly. it was also difficult with my studies, the educational system did not suit me. After several months of my freshman year, I got to know a guy from Egypt who later helped a lot with my studies.When he had time, we stayed in the library, he explained education material that I did not understand in the course.
 Then I began to study better. That's how my first years of study went.
</p>
`,
    cols: "3",
  },
  {
    id: 2,
    img: indones,
    title: "Indonesian cuisine ",
    imgArray: [
      {
        img: indones,
        col: "4",
      },
      {
        img: indones2,
        col: "4",
      },
      {
        img: indones3,
        col: "4",
      },
      {
        img: indones4,
        col: "4",
      },
      {
        img: indones5,
        col: "4",
      },
    ],
    description: `
        <h3>Description</h3>
        <p>
         Girls from Indonesia invited me to cook an Indonesian dish with them.
        It was very cool experience, we have cooked dish that's main ingredients were meat and rice and a dessert called "sweet martabak".
        Didn't know that Indian Indonesian cuisine is so delicious. After the end of cooking, there is nothing left.
        </p>
`,
    cols: "3",
  },
  {
    id: 3,
    img: yg,
    title: "Young Leaders. English club",
    imgArray: [
      {
        img: yg,
        col: "4",
      },
      {
        img: yg2,
        col: "4",
      },
      {
        img: yg3,
        col: "4",
      },
    ],
    description: `
                <p>
                  <h3>Description</h3>  
                 Young leaders  club was organized by foreign students where people come every Sunday to communicate in English. People come here from different countries of Europe,  Asia, Africa.
                 We communicate on various topics and develop our  English  skills, group work and critical thinking.

        </p>
`,
    cols: "6",
  },
];

export default data;
