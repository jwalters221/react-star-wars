const getState = ({ getStore, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			addToFavorites: koala => {
				var tempStore = getStore();
				var newFavorite = {
					name: koala
				};
				tempStore.favorites.push(newFavorite);
				setStore({ tempStore });
			},
			deleteFromFavorites: elm => {
				var { favorites } = getStore();

				setStore({
					favorites: favorites.filter(f => f.name != elm.name)
				});
			}
		}
	};
};

export default getState;
