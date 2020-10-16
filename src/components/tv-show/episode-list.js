import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableFooter,
  TableRow, TablePagination, Paper
} from '@material-ui/core';
import { getEpisodeList } from '../../redux/modules/episodes';


const EpisodeList = memo(() => {
  const { tvShowId } = useParams();
  const dispatch = useDispatch();
  const episodeList = useSelector(state => state.episodes.episodeList);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [totalCount, setTotalCount] = useState(0);
  const [currentEpisodeList, setCurrentEpisodeList] = useState([]);

  useEffect(() => {
    dispatch(getEpisodeList(tvShowId));
  }, [dispatch, tvShowId]);

  useEffect(() => {
    const currentEpisodes = episodeList.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    );
    setCurrentEpisodeList(currentEpisodes);
    setTotalCount(episodeList.length);
  }, [episodeList, episodeList.length, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Episode Name</TableCell>
            <TableCell>Season</TableCell>
            <TableCell>Airdate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentEpisodeList.map((episode) => (
            <TableRow key={episode.name}>
              <TableCell>
                <Link
                  to={{
                    pathname: `/episodes/${episode.id}/${episode.name}`,
                    state: { episode }
                  }}>
                  {episode.name}
                </Link>
              </TableCell>
              <TableCell>{episode.season}</TableCell>
              <TableCell>{episode.airdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              count={totalCount}
              page={page}
              onChangePage={handleChangePage}
              rowsPerPage={rowsPerPage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer >
  )
})

export default EpisodeList;
