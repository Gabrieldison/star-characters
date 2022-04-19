import React from "react";
import { InfoCharacter } from "../../types/types";
import { Container, Box, Button } from "@material-ui/core";
import { GetServerSideProps } from "next";
import CharacterAvatar from "../../components/CharacterAvatar";
import Link from "next/link";
import { ContainerBackground, ContainerDetails } from "./styles";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `http://swapi.dev/api/people/${context.query.id}`
  );

  const character = await response.json();

  return {
    props: {
      character,
    },
  };
};

export default function CharacterPage({
  character,
}: {
  character: InfoCharacter;
}) {
  return (
    <ContainerBackground>
      <Box>
        <Box marginTop={5} marginBottom={10}>
          <Link href={"/"} passHref>
            <Box component="a" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  background: "yellow",
                  color: "black",
                  marginTop: "15px",
                  marginLeft: "-60px",
                }}
              >
                Back
              </Button>
            </Box>
          </Link>
        </Box>
        <Container>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            marginTop={10}
            alignItems="center"
            component="main"
          >
            <Box
              component="aside"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <CharacterAvatar
                gender={character.gender}
                hair_color={character.hair_color}
                skin_color={character.skin_color}
                width="300"
                height="300"
              />
            </Box>
            <ContainerDetails>
              <h2>
                <span>Name:</span> {character.name}
              </h2>
              <p>
                <span>Gender:</span> {character.gender}
              </p>
              <p>
                <span>Height:</span> {character.height}
              </p>
              <p>
                <span>Weigth:</span> {character.mass}
              </p>
              <p>
                <span>Birth date:</span>
                {character.birth_year}
              </p>
              <p>
                <span>Eye color:</span> {character.eye_color}
              </p>
            </ContainerDetails>
          </Box>
        </Container>
      </Box>
    </ContainerBackground>
  );
}
