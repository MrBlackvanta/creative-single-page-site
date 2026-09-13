export default function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M2.222.808l16.97 16.97-1.414 1.414L.808 2.222zM.808 17.778L17.778.808l1.414 1.414-16.97 16.97z"
      />
    </svg>
  );
}
