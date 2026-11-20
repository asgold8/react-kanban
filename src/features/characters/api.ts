import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";

const API_URL = "https://rickandmortyapi.com/graphql";

const SEARCH_CHARACTERS = gql`
  query SearchCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

export type Character = { id: string; name: string; image: string; species: string };

type SearchResponse = { characters: { results: Character[] | null } };

export async function searchCharacters(name: string): Promise<Character[]> {
  const data = await request<SearchResponse>(API_URL, SEARCH_CHARACTERS, { name });
  return data.characters.results ?? [];
}

export function useCharacterSearch(name: string) {
  return useQuery({
    queryKey: ["characters", name],
    queryFn: () => searchCharacters(name),
    placeholderData: keepPreviousData,
  });
}
