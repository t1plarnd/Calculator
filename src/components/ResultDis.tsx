import { FC } from "react";

interface ResultProps {
  result: string;
}

export const ResultDis: FC<ResultProps> = ({ result }: ResultProps) => {
  return (
    <div className="result-display">
      {result}
    </div>
  );
}