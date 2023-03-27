import {usePlasmicQueryData} from "@plasmicapp/query";
import {DataProvider} from "@plasmicapp/host";
import {ReactNode} from "react";


export const QueryComponent = ({children}: {
  children: ReactNode
}) => {

  console.log("I'm being rendered")

  const data = usePlasmicQueryData("query", () => {

    // comment this line and the infinite loop goes away
    return undefined;

    return {
      data: "test",
    }
  })

  console.log("Data: ", data)

  return <DataProvider data={data}>
    {children}
  </DataProvider>

}