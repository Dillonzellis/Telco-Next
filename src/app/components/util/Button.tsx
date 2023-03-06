// import Link from 'next/link'

function Button({ btnText }: { btnText: string }) {
  // add conditional logic for internal client-side routing using Link
  return (
    <div className="bg-brandingGreen-400 text-white">{btnText}</div>
  );
}

export default Button;
