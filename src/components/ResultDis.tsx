interface ResultProps {
  result: string;
}

export function ResultDis({ result }: ResultProps) {
  return (
    <div className="result-display">
      {result}
    </div>
  );
}