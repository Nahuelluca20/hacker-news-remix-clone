export enum URLSearchParamFields {
  HOW = "how",
  GOTO = "goto",
  PAGE = "p",
  ID = "id",
}

export function getSearchParamsFromRequest(request: Request) {
  return new URL(request.url).searchParams;
}
