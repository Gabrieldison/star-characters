import type { NextPage } from "next";
import CharacterAvatar from "../components/CharacterAvatar";
import { InfoCharacter } from "../types/types";
import { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "../components/Pagination";
import { Container, Description } from "./styles";
import { Card } from "@material-ui/core";

const Home: NextPage<{ characters: InfoCharacter[] }> = () => {
  const [characters, setCharacters] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalNumberOfCharacters, setTotalNumberOfCharacters] = useState(0);

  const charactersPerPage: number = 10;
  const totalPages: number = Math.ceil(
    totalNumberOfCharacters / charactersPerPage
  );

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${actualPage}`
      );
      const { count, results } = await response.json();

      setCharacters(results);
      setTotalNumberOfCharacters(count);
    };

    fetchCharacters();
  }, [actualPage]);

  return (
    <Container>
      {characters.map((character: any, index: number) => {
        const id = character.url.replace(/\D/g, "");

        return (
          <Link href={`/people/${id}`} passHref key={index}>
            <Card
              style={{
                background: "#1a1a1a",
                borderRadius: "14px",
                marginTop: "8px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <CharacterAvatar
                gender={character.gender}
                hair_color={character.hair_color}
                skin_color={character.skin_color}
                width="80"
                height="80"
              />

              <Description>
                <p>{character.name}</p>
                <p>{character.gender}</p>
              </Description>
            </Card>
          </Link>
        );
      })}

      <Pagination
        actualPage={actualPage}
        setActualPage={setActualPage}
        totalPages={totalPages}
      />
    </Container>
  );
};

export default Home;
