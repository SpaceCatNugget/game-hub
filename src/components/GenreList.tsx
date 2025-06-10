import useGenre from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { type Genre } from "@/hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
  displayMode: "drawer" | "list"; // new prop
}

const GenreList = ({ selectedGenre, onSelectGenre, displayMode }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;

  const genreList = (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => {
                onSelectGenre(genre);
              }}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );

  if (displayMode === "list") return genreList;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genres"}
      </MenuButton>
      <MenuList>{genreList}</MenuList>
    </Menu>
  );
};

export default GenreList;
