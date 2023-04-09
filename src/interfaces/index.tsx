export namespace ICurrentActiveElement {

  export interface CurrentActiveElement {
    value: HTMLElement | null,
    set: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  }

  export interface Context {
    currentActiveElement: CurrentActiveElement | null,
  }
}