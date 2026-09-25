import Aura1 from "../componenets/cards/Aura1";
import Card from "../componenets/cards/Card";
import ProfileCard from "../componenets/cards/ProfileCard";
import Subscription from "../componenets/cards/Subscription";
import Coloring from "../componenets/common/Coloring";
import {Scratch1,Scratch2} from "../scratch/Scratch1";



const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col flex-1 items-stretch min-h-0 overflow-y-auto p-2.5 bg-base-300 gap-3

     ">
      <div className="grid flex-1 min-h-0 grid-cols-[20rem_1fr]   p-5 gap-2">
        < ProfileCard />
        <Card/>

        <Aura1/>
        <Subscription />
        <Scratch1 />
        <p className="">
          <Scratch2 />
        <Coloring
          name="
          911 views  Sep 13, 2026
          Do you remember me ? is an emotional sad rap song about missing someone who use to mean everything.sometime the hardest part of losing someone isn't saying goodbye-- it's wondering if they still remember you           
          …
          Downloads
          2 / 48

          true
          4:07
          Pa Lungdei - Kakai Kipgen
          Munga Khsai
          ▶
          true
          3:00
          Do you remember me?/Emotional sad rap songs 💔/Heartbreak & Lost love
          Neda Lyrics
          true
          4:56
          NEOSEN LUNGDEI LUNGLAIA CHAMJING
          Khaltwi Net
          true
          4:16
          JEFFERY HAOKIP || MELMU NI APAT || Lyrics Video
          GIBEON MEDIA
          true
          3:34
          ka selung hel ji ting lyrics || edit by robert zou
          Robert Zou
          true
          5:01
          ELLE ROSE || HAI PRIYA 3 || LETLENCHUNG LUPHO || CHOCHOI HAOKIP
          Ngampao Haokip
          true
          3:40
          Silung lai ah oi ding hi nam (djkay ft rain dym )lyris
          7teens official
          true
          4:17
          selung lai a mang thei lou||-official song-
          MIN EIMI OFFICIAL
          Mi angai toh laileng ta || MAXCY HAHAO SINGSON
          MAXCY HAHAO SINGSON
          Lallianmawia Pachuau - I tan hmangaihna || Album - Duat lai Ate
          Lallianma
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          aspernatur dolor, soluta cumque harum, totam laudantium at, ut voluptate
          praesentium obcaecati natus hic debitis quaerat tempore neque sint!
          Magnam, tempore.  "
        />
        </p>



      </div>
      
    </div>

  );
};

export default Home;
