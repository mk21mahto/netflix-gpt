import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";

const GptSearchBar = () => {
  const language = useSelector((state) => state.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClicked = async () => {
    // const gptResult = await openai.chat.completions.create({
    //   model: "gpt-4o",
    //   messages: [
    //     { role: "developer", content: "Talk like a pirate." },
    //     { role: "user", content: "Are semicolons optional in JavaScript?" },
    //   ],
    // });
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button
          className="py-2 px-4 bg-red-700 col-span-3 m-4 rounded-lg"
          onClick={handleGptSearchClicked}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
