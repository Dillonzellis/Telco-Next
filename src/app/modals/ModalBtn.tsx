function ModalBtn({ btnLink }: { btnLink: string }) {
  return (
    <div>
      <a
        href={btnLink}
        className="block rounded-md border-2 border-brandingBlue-400 bg-brandingBlue-400 px-12 py-2 text-center font-bold text-white"
      >
        Continue
      </a>
    </div>
  );
}

export default ModalBtn;
