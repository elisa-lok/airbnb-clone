import { getEntireRoomList } from '@/services/modules/entire';
import * as actionTypes from './constants';

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
     // update currentPage
     dispatch(changeCurrentPageAction(page));

     //update roomList
     dispatch(changeIsLoadingAction(true));
     // const currentPage = getState().entire.currentPage
     const res = await getEntireRoomList(page * 20);
     dispatch(changeIsLoadingAction(false));

     //store data in redux
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  }
}