export const pagination = (currentPage: number, totalPages: number) => {
  const paginationConfig = {
    hasDotBefore: false,
    hasDotAfter: false,
    rangePagesShow: [] as number[]
  };
  const maxRangShow = 5;
  const minRangeShow = 3;
  const maxRangeAround = 2;

  switch (true) {
    case currentPage <= minRangeShow:
      paginationConfig.rangePagesShow = getStartPagination(
        totalPages,
        maxRangShow
      );
      paginationConfig.hasDotAfter = totalPages > maxRangShow ? true : false;
      break;

    case currentPage >= totalPages - maxRangeAround && totalPages > maxRangShow:
      paginationConfig.rangePagesShow = getEndPagination(
        totalPages,
        maxRangShow
      );
      paginationConfig.hasDotBefore = true;
      break;

    case currentPage > minRangeShow &&
      currentPage < totalPages - maxRangeAround:
    default:
      paginationConfig.rangePagesShow = getMiddlePagination(
        totalPages,
        currentPage,
        maxRangeAround
      );
      paginationConfig.hasDotBefore = true;
      paginationConfig.hasDotAfter = true;
      break;
  }

  return paginationConfig;
};

function getStartPagination(totalPages: number, maxRangShow: number): number[] {
  const startPagination = new Array<number>();
  const maxPageShow = totalPages > maxRangShow ? maxRangShow : totalPages;
  for (let i = 1; i <= maxPageShow; i++) {
    startPagination.push(i);
  }
  return startPagination;
}

function getEndPagination(totalPages: number, maxRangShow: number): number[] {
  const endPagination = new Array<number>();
  const rangeLastNumbers = totalPages - (maxRangShow - 1);
  for (let i = rangeLastNumbers; i <= totalPages; i++) {
    endPagination.push(i);
  }
  return endPagination;
}

function getMiddlePagination(
  totalPages: number,
  currentPage: number,
  maxRangeAround: number
): number[] {
  const middlePagination: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i >= currentPage - maxRangeAround &&
      i <= currentPage + maxRangeAround
    ) {
      middlePagination.push(i);
    }
  }
  return middlePagination;
}
