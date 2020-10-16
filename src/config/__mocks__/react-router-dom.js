module.exports = {
    useLocation:jest.fn().mockReturnValue({state:null}),
    useParams: jest.fn().mockReturnValue({tvShowId:1,episodeId:1}),
  };