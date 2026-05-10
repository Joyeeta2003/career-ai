function PageHeader({ badge, title, description }) {
  return (
    <div className="mb-12">

      <p className="text-purple-400 uppercase tracking-widest font-semibold">
        {badge}
      </p>

      <h1 className="text-5xl font-bold mt-4">
        {title}
      </h1>

      {description && (
        <p className="text-gray-400 mt-4 max-w-2xl">
          {description}
        </p>
      )}

    </div>
  )
}

export default PageHeader