/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";

import Image from "next/image";

export default function Header() {
  return <Container>
    <Image src='/images/star-logo.png' alt="star wars logo" width={115} height={55}/>
  </Container>;
}
