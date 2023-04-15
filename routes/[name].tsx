import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <>
      <div>Oi {props.params.name}</div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
}
