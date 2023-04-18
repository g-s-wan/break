import { REPLFunction } from "../src/interfaces/REPLFunction";
import { FeatureCollection } from "geojson";
import rl_data from "../tests/mockData.json";
import { ReactElement } from "react";

/**
 * This is our mock API for testing. It contains two functions: mockFilter and mockSearch. We
 * make calls to these functions in our unit tests to avoid making calls to the actual API. We
 * do not actually do much filtering or searching in these function since they are for mock
 * purposes only, and we mainly wanted to test that our frontend would properly process user 
 * inputs and subsequent calls to different REPLFunctions.
 */

//These two functions are the same as in overlays.ts
function isFeatureCollection(json: any): json is FeatureCollection {
      return json.type === "FeatureCollection";
}
function overlayData(): GeoJSON.FeatureCollection | undefined {
      return (isFeatureCollection(rl_data)) ? rl_data : undefined;
}
const mockJson : GeoJSON.FeatureCollection | undefined = overlayData();


/**
 * This mocks our filter by checking that the user has input 4 numeric arguments representing
 * the bounding latitudes and longitudes. If the incorrect arguments are input, an error is thrown.
 * Otherwise, a GeoJSON is returned.
 * @param args The input arguments
 * @returns Promise<GeoJSON.FeatureCollection>
 */
export const mockFilter: REPLFunction = function (
  args: Array<string>
): Promise<GeoJSON.FeatureCollection> {
  return new Promise((resolve, reject) => {
    if (args.length != 4) {
      //If there are an incorrect number of arguments
      throw new Error("Please enter parameters: maxlat, maxlon, minlat, minlon");
    } else {
      if(mockJson != undefined){
        if (
          //If one of the arguments is not a number
          isNaN(parseFloat(args[0])) ||
          isNaN(parseFloat(args[1])) ||
          isNaN(parseFloat(args[2])) ||
          isNaN(parseFloat(args[3]))
        ) {
          throw new Error(
            "Please only enter numeric arguments"
          );
        }
        resolve(mockJson)
      }
    }
  });
};

/**
 * This mocks our search by making sure that the user inputs one keyword to search for. If the
 * user does not, an error is thrown. Otherwise, a GeoJSON is returned.
 * @param args: The user's keyword to search for
 * @returns: Promise<GeoJSON.FeatureCollection>
 */
export const mockSearch: REPLFunction = function (
  args: Array<string>
): Promise<GeoJSON.FeatureCollection> {
  return new Promise((resolve, reject) => {
    if (args.length != 1) {
      throw new Error(
        "Searchjson command needs 1 argument: keyword(s) Hint: Use %20 where you would have spaces."
      );
    } else {
      if(mockJson != undefined){
        resolve(mockJson)
      }
    }
  });
};

