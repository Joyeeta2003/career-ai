function Button({ text, primary }) {

  return (
    <button
      className={`
        px-8 py-4 rounded-full text-lg font-semibold transition duration-300

        ${primary
          ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105"
          : "border border-white/20 hover:bg-white/10"
        }
      `}
    >
      {text}
    </button>
  )
}

export default Button