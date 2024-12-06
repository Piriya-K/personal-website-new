"use client";
import HeroSection from "./component/HeroSection";
import { useMode } from "@/app/Provider";

const homepage = () => {
  const { mode } = useMode();

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="">
          <HeroSection />
        </div>
      </div>
      <div id="about" className="min-h-screen flex justify-center items-center">
        <div>
          <h2 className="text-shadow">About Piriya</h2>
          <div className="xl:flex">
            <div className="xl:w-1/2 flex justify-center items-center relative group">
              {/* Hidden Text */}
              <div className="absolute inset-0 justify-center items-center bg-black bg-opacity-90 text-white text-lg font-bold hidden group-hover:flex">
                <p>THAILAND</p>
              </div>
              {/* Hidden Text */}
              {/* Elephant */}
              <svg
                fill="currentColor"
                viewBox="0 0 64 64"
                className={`w-40 h-40 ${mode ? "text-sky-700" : "text-white"}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Elephant_1_">
                  <circle cx="54.5423508" cy="24.7482376" r="1.50615" />
                  <path
                    d="M54.2569504,12.4205885l-0.1817017-0.0743008h-6.9149971c-0.9990005-0.9422998-4.1445007-3.5165997-7.3652-2.0985994
      c-0.7024002,0.3087997-1.4112015,0.9689999-2.1004028,1.8202c-2.8536987-0.6802998-14.7072983-3.0931005-25.2736969,0.8555994
      C0.8692509,17.2398872-0.2919491,32.6294899,0.0391591,36.2085876c0.0604918,0.6495018,0.6913918,7.0966988,0.6913918,7.0966988
      c0.0469,0.4834023,0.4356082,0.8633003,0.9199,0.8994026c0.4784999,0.0312996,0.9257998-0.2812004,1.0448999-0.7518997
      c0.2823-1.1192017,0.9013999-3.3339996,1.6289999-5.4160004L3.9981592,53.1480865
      c-0.0059083,0.2685013,0.0975916,0.5283012,0.2850916,0.7207031c0.1884999,0.1923981,0.4463,0.3007965,0.7149081,0.3007965
      h7.2587914c0.4707003,0,0.8779001-0.3280983,0.9775-0.7880974l2.8858004-13.3115005
      c2.4969997,1.0009003,8.5750999,2.8203011,15.0439091,0.1503983c1.8134899-0.75,3.7499981-0.4003983,4.8651905,0.2763023
      c0.5782013,0.3516006,0.9306984,0.7803001,0.9659004,1.1777992c0.4453011,5.0068016,1.535099,11.592701,1.5459099,11.6590996
      c0.079998,0.482502,0.4969978,0.8359985,0.98629,0.8359985h7.0928001c0.4764977,0,0.8875999-0.3368988,0.9804001-0.8046989
      c0.0346985-0.1725998,0.3307991-2.2467003,0.2782974-21.5342999c0.3494034,0.365099,0.8567009,1.3788013,1.1377029,2.4972019
      l0.1513977,0.6044998l0.607399,0.1307983c0.5117111,0.1104012,3.1221008,0.5860023,4.1563034-0.9169998
      c0.1395988-0.2030983,0.3856964-0.3222008,0.634697-0.3905983c0.4639015,2.3027,1.6094017,9.1288986,0.8642998,17.4628983
      l-0.0976982,1.0889015h5.5312996l0.2919998-0.4815025c0.1035004-0.1688995,2.5205002-4.322197,2.8428116-19.509697
      C64.3311615,16.7134876,54.6680489,12.5884876,54.2569504,12.4205885z M45.6934509,52.1695862h-5.3145027
      c-0.3045998-1.9218979-1.0458984-6.7870979-1.3915977-10.6728973c-0.0937004-1.0527-0.7763023-2.0156021-1.9209023-2.7098999
      c-1.8856964-1.1436005-4.5008965-1.3067017-6.6649971-0.4160995c-7.3896008,3.0499001-14.4629002-0.565403-14.5332003-0.6025009
      c-0.2744007-0.1435013-0.6035004-0.1514015-0.8877001-0.0195007c-0.2821999,0.1328011-0.4872999,0.3886986-0.5537004,0.6933022
      l-2.9765997,13.7275963H6.0196509l0.4081998-18.9189987c0.0088-0.4355011-0.2646918-0.8270988-0.6767998-0.967701
      c-0.4121003-0.139698-0.8672004,0.0009003-1.1268916,0.3515015c-0.8545084,1.1543007-1.7120001,3.3154984-2.4024084,5.3652992
      c-0.0947001-0.9814987-0.1719-1.7705994-0.1904001-1.9755974c-0.0156-0.1660004-0.5898999-16.8633022,11.0888996-21.227602
      c9.1413002-3.4132996,19.6450005-1.7235994,23.3246994-0.9531002c-2.1707001,3.4778004-3.9272995,8.2140999-4.2416992,9.0859013
      c-0.1240921,0.2890987-0.4864006,1.3193989-0.0069008,2.6484985c0.5811005,1.6142006,2.1416016,2.9971008,4.6386986,4.1103001
      c0.9541092,0.4258003,1.8076019,0.8233013,2.5752029,1.1816998c2.8893967,1.3462009,4.8161964,2.2418003,6.4706993,1.854002
      C45.9099503,45.7915878,45.7730484,50.5401878,45.6934509,52.1695862z M59.662159,50.3072891h-2.15131
      c0.7246017-10.0381012-1.1035004-17.5429993-1.1846008-17.8682022L56.15345,31.7437878l-0.714901-0.0595989
      c-0.2178001-0.0223999-2.1493912-0.1338005-3.1553001,1.3290977c-0.1132011,0.1641006-0.777298,0.2510033-1.5097008,0.1817017
      c-0.3573875-1.1338005-1.139698-3.0030003-2.4941978-3.4190006c-0.4051895-0.1240005-1.2158012-0.2187004-2.0703011,0.5498009
      c-1.0555992,0.9473-2.2733994,0.4473-5.9540977-1.2695007c-0.7763023-0.3612995-1.6396027-0.7637005-2.6054001-1.1942997
      c-4.4737015-1.9951992-3.6485023-4.0508003-3.6211014-4.1152992l0.044899-0.1064014
      c1.4336014-3.9902992,4.4736023-10.6591997,6.5263023-11.562499c2.5185966-1.1065006,5.3886986,1.9198999,5.4169998,1.9491997
      l0.2958984,0.3192997h7.3487015c1.1923981,0.5840006,8.6180992,4.7598009,8.3379097,17.9267998
      C61.7500496,44.0123863,60.2315483,48.8794899,59.662159,50.3072891z"
                  />
                </g>
              </svg>
              {/* Elephant */}
            </div>
            <div className="xl:w-1/2 flex justify-center items-center">
              <p>
                Piriya hails from a small tropical country in Southeast Asia
                where it is believed that people travel on elephants.
              </p>
            </div>
          </div>
          <div className="flex">
            <div></div>
            <p>
              He kicks-off his career with digital marketing. As a digital
              marketing specialist, he masters the multiple faucets of the
              discipline. They include making websites appear first on Google or
              Bing, creating compelling ads that people would go through on
              Youtube; Google; Instagram; and LinkedIn, setting up email
              campaigns that generate leads and sales, to name a few.
            </p>
          </div>
          <p>
            After a few years, Piriya's ambition grew, so did his hunger to
            learn. He spent some time searching for his next conquest, before
            setting his sight on "programming". "Programming", "Coding",
            "Application Development", these were the things that Before he know
            it, he decided to leave his elephants and warm weather behind,
            hopped on a plane, and flew to a land of maple syrup and hockey
            sticks to pursue his studies in software development.
          </p>
          <p>
            In a blink of an eye, he graduated with an IT diploma from the{" "}
            <span className="font-bold underline underline-offset-4">
              Southern Alberta Institute of Technology (SAIT){" "}
            </span>
            , Calgary, Alberta. background and the founder of an emerging IT and
            digital marketing agency. Combining expertise in SEO, social media,
            and analytics with technical skills, Piriya delivers innovative,
            data-driven solutions to help businesses thrive in the digital
            world.
          </p>
        </div>
      </div>
    </>
  );
};

export default homepage;