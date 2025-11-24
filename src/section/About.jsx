import { GitHubCalendar } from "react-github-calendar";
import CardExperience from "../components/CardExperience";
import dataExperience from "../data/experience.json";
import dataSkill from "../data/skills.json";

const About = () => {
  return (
    <div className="p-4">
      <section classname="mt-4">
        <h1 className="font-bold my-2">Tentang saya</h1>
        <p className="text-stone-600 text-sm">
          Saya merupakan lulusan S1 Informatika dari Universitas Singaperbangsa
          Karawang yang fokus berkarier dibidang Web Programmer. Dengan
          kemampuan problem-solving yang kuat, kemauan untuk selalu belajar,
          serta kedisiplinan dalam menjaga kualitas kode, saya berupaya
          memberikan solusi teknologi yang efektif dan dapat diandalkan.
        </p>

        <div className="flex justify-center  border  p-2 rounded-md border-gray-200 my-2">
          <GitHubCalendar
            username="Muhamadfajaryh12"
            blockSize={14}
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </section>
      <section className="mt-4">
        <h1 className="font-bold my-2">Keahlian</h1>
        <div className="flex gap-4 flex-wrap">
          {dataSkill.map((item) => (
            <div className="border-gray-200 rounded-md border p-2 ">
              <span className="text-sm text-stone-600 font-semibold">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-4">
        <h1 className=" font-bold my-2">Pengalaman</h1>
        <div className="flex flex-wrap  gap-4">
          {dataExperience.map((item) => (
            <CardExperience data={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
