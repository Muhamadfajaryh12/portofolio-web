const CardExperience = ({ data, active }) => {
  const { company, periode, position, type } = data;
  return (
    <div className="h-auto w-auto  text-stone-600 border border-gray-200 rounded-md p-4">
      <h5 className=" font-bold">
        {position} - {type}
      </h5>
      <h5 className="text-sm">{company}</h5>
      <p className="text-sm">{periode}</p>
    </div>
  );
};

export default CardExperience;
