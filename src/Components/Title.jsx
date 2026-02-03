const Title = ({ subTitle, title }) => {
  return (
    // Removed mt-16; let the parent handle layout spacing
    <div className='text-center uppercase mb-10 px-4'>
      <p className="text-blue-700 text-sm font-bold tracking-wide">
        {subTitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 normal-case">
        {title}
      </h2>
    </div>
  );
};

export default Title