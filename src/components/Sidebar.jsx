import { Stack, colors } from "@mui/material";
import { categories } from "../utils/constantItems";
const Sidebar = () => {
  const selectedCategory = "New";
  return (
    <>
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "90%" },
          flexDirection: { md: "column" },
        }}
      >
        {categories.map((category) => (
          <button
            key={category.name}
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#FC1503",
              color: "white",
            }}
          >
            <span style={{ marginRight: '15px' , color:category.name === selectedCategory ? 'white' : 'red'}}>{category.icon}</span>
            <span style={{opacity:category.name === selectedCategory ? '1':'0.8'}}>{category.name}</span>
          </button>
        ))}
      </Stack>
    </>
  );
};

export default Sidebar;
