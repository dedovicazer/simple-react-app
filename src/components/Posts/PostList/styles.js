const styles = () => ({
  postContainer: {
    padding: 8,
    borderBottom: `1px solid #9e9e9e`,
    cursor: 'pointer',
  },
  selectedPost: {
    background: '#ccdcea',
  },
  postItem: {
    width: '100%',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postUsername: {
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'italic',
  },
  postBody: {
    fontSize: 12,
  },
  header: {
    fontSize: 20,
    paddingLeft: 8,
    marginBottom: 10,
  },
  filterQuery: {
    paddingLeft: 8,
    paddingBottom: 8,
  },
  filterTextField: {
    '& input': {
      width: 185,
    },
  },
});

export default styles;
