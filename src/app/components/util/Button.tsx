// import Link from 'next/link'

function Button({ btnText }: { btnText: string }) {
  // add conditional logic for internal client-side routing using Link
  return (
    <div className="rounded-lg bg-brandingGreen-400 px-2 py-2 text-lg font-bold capitalize text-white shadow-md">
      {btnText}
    </div>
  );
}

export default Button;
