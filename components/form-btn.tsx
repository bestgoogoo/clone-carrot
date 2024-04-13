interface IFormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: IFormButtonProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-100 disabled:cursor-not-allowed"
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
