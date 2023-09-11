import React from "react";

import { Star, StarOutline } from "@mui/icons-material";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import styles from "./FavoritedItem.module.css";

interface FavoritedItemProps {
  label: string;
  description: string;
  onToggleFavorite: () => void;
  isFavourite: boolean;
}

const FavoritedItem: React.FC<FavoritedItemProps> = ({
  label,
  onToggleFavorite,
  description,
  isFavourite,
}) => {
  const handleStarClick = () => {
    onToggleFavorite();
  };

  return (
    <Card>
      <CardContent>
        <div className={styles.FavoritedItem}>{label}</div>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {isFavourite ? (
          <Star style={{ color: "#FFD96A" }} onClick={handleStarClick} />
        ) : (
          <StarOutline onClick={handleStarClick} />
        )}
      </CardActions>
    </Card>
  );
};

export default FavoritedItem;
