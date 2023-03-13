import { useState } from "react";

const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputData = name + email + message;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ name, email, message });
  };

  return (
    <div>
      <div className="items-center justify-center text-center">
        {inputData && <p>You Submitted: {inputData}</p>}
      </div>
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block font-bold text-[#FF9494]">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus:shadow-outline w-full appearance-none rounded border-none  bg-[#FFF5E4]/75 py-2 px-3 leading-tight text-[#FF9494]/90 shadow-xl brightness-95 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block font-bold text-[#FF9494]"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:shadow-outline w-full appearance-none rounded border-none  bg-[#FFF5E4]/75 py-2 px-3 leading-tight text-[#FF9494]/90 shadow-xl brightness-95  focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="mb-2 block font-bold text-[#FF9494]"
          >
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="focus:shadow-outline w-full appearance-none rounded border-none  bg-[#FFF5E4]/75 py-2 px-3 leading-tight text-[#FF9494]/90 shadow-xl brightness-95  focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-[#FF9494] py-2 px-4 font-bold text-white focus:outline-none hover:brightness-90 active:brightness-75"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
