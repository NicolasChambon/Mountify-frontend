export const FETCH_REGIONS = "FETCH_REGIONS";
export const FETCH_REGIONS_SUCCESS = "FETCH_REGIONS_SUCCESS";

export const fetchRegions = () => ({
  type: FETCH_REGIONS,
});

export const fetchRegionsSuccess = (regions) => ({
  type: FETCH_REGIONS_SUCCESS,
  regions,
});
