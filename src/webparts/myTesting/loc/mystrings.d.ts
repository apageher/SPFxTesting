declare interface IMyTestingWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyTestingWebPartStrings' {
  const strings: IMyTestingWebPartStrings;
  export = strings;
}
