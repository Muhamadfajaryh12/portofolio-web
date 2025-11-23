import CardExperience from "../components/CardExperience";
import dataExperience from "../data/experience.json";
import dataSkill from "../data/skills.json";

const About = () => {
  return (
    <div className="p-4">
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
