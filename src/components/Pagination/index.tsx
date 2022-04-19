import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";

interface Props {
  actualPage: number;
  setActualPage: any;
  totalPages: number;
}

const Pagination = ({ actualPage, setActualPage, totalPages }: Props) => {
  const pageNumber = [];

  for (let index = 1; index <= totalPages; index++) {
    pageNumber.push(index);
  }

  const handleSetNextPage = () => {
    setActualPage(actualPage + 1);
  };

  const handleSetPreviousPage = () => {
    setActualPage(actualPage - 1);
  };

  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Box marginTop={5} style={{marginTop: "10px"}}>
        <Button
          disabled={actualPage === 1 ? true : false}
          onClick={handleSetPreviousPage}
          style={{
            background: "yellow",
            color: "black",
            marginRight: "10px",
          }}
        >
          Prev
        </Button>
        {pageNumber.map((number) => (
          <Button
            disabled={actualPage === number ? true : false}
            onClick={() => setActualPage(number)}
            key={number}
            style={{
              background: "yellow",
              color: "black",
              marginRight: "10px",
            }}
          >
            {number}
          </Button>
        ))}
        <Button
          disabled={actualPage === totalPages ? true : false}
          onClick={handleSetNextPage}
          style={{
            background: "yellow",
            color: "black",
          }}
        >
          Next
        </Button>
      </Box>
      <Box marginTop={5} marginBottom={10}>
        <Button
          style={{
            background: "yellow",
            color: "black",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Current Page: {actualPage}
        </Button>
      </Box>
    </Box>
  );
};

export default Pagination;
