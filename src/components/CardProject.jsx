import { MdArrowOutward } from "react-icons/md";
const CardProject = ({ data }) => {
  const { image, name, logo } = data;
  return (
    <div className="rounded-xl snap-center border border-gray-700 w-full w-96 p-4 flex-0">
      <div className="w-96 h-56 rounded-lg bg-linear-10 from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="absolute -bottom-5 left-8 rotate-4  rounded-xl">
          <img src={image} alt="" className="h-52  w-xs rounded-xl" />
        </div>
      </div>

      <div className="text-white my-4">
        <p className="font-bold text-md mb-2">{name}</p>
        <p class="line-clamp-3 text-sm text-justify">
          Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
          occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
          occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu
          dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut
          cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure
          quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
          voluptate sunt elit mollit officia ad enim sit consectetur enim.
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex gap-1">
            {logo.map((item, index) => (
              <div
                className="border border-gray-700 rounded-full h-8 w-8 p-1 flex justify-center items-center"
                key={index}
              >
                <img src={item.image} alt="" className="rounded-full" />
              </div>
            ))}
          </div>
          <a className="flex items-center gap-1">
            <span className="text-sm">View project</span>
            <MdArrowOutward size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
