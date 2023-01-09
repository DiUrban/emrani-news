//@ts-ignore
import { Spinner } from "loading-animations-react";

type Props = {};

function loading({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner color1="#143db8" color2="#b8c2e0" textColor="#143db8" />
    </div>
  );
}

export default loading;
