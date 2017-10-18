import * as React from "react";

interface AppProps {
  text: string;
}

export const App: React.SFC<AppProps> = props => (
  <div>{props.text}</div>
);
