export default function Button({ children }) {
    return (
        <button
            className="
        w-full
        bg-[#0d3b82]
        text-white
        py-3
        rounded-md
        font-bold
        tracking-wide
        transition
        duration-300
        hover:bg-[#0a2f68]
        active:scale-95
      "
        >
            {children}
        </button>
    );
}