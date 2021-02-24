export interface ISearchBox {
  onUserSearch?: (value?: string | undefined) => Promise<void>;
}
