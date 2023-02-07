interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const progressStyles = {
    width: `${props.progress}%`,
  };

  return (
    <div className="h-3 rounded-xl bg-zinc-900 w-full mt-4">
      <div
        className="h-3 rounded-xl bg-violet-600 transition-all"
        role="progressbar"
        aria-labe="Progresso de hábitos completados nesse dia"
        aria-valunow={props.progress}
        style={progressStyles}
      ></div>
    </div>
  );
}
