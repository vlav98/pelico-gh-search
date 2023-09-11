export interface SearchResultsData {
  search: {
    nodes: SearchResult[];
  };
}

export interface SearchResultsVariables {
  query: string;
}

export interface SearchResult {
  typename: string;
  id: string;
  name: string;
  description: string;
}

export interface FavoritesItemsData {
  items: FavoriteItem[];
}

export interface FavoriteItem {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
}
