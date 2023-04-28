package src.main.server;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import spark.Request;
import spark.Response;
import spark.Route;
import generator.RandomGenerator;
import csv.rowobjects.Move;
import src.main.csv.rowcreators.MoveCreator;
import src.main.server.GenerateHandler.GenerateResponse;

public class MoveHandler implements Route {
  public MoveHandler() {
  }

  /**
   * Handles requests to the server to generate sequences of breakdancing moves
   *
   * @param request  - HTTP request from the user
   * @param response - HTTP response from the server
   * @return MapResponse - JSON response that reports whether the generation was successful
   * @throws Exception
   */
  @Override
  public Object handle(Request request, Response response) throws Exception {
    Map<String, Object> jsonMap = new LinkedHashMap<>();
    csv.Parser parser = new csv.Parser(new FileReader("back/data/Sample_Data.csv"), new MoveCreator(), true);
    List<Move> moveList = parser.parseLines();

    try {
      jsonMap.put("result", "success");
      jsonMap.put("data", moveList);
    } catch (Exception e) {
      jsonMap.put("result", "error");
      jsonMap.put("message", "An error occurred while retrieving the move list");
    }

    return new MoveResponse(jsonMap);
  }

  /**
   * A JSON response that returns a success message if the sequence generation was successful, or an error message
   * if something went wrong
   *
   * @param jsonMap - the map that will be serialized into a JSON
   * @return this response, serialized as Json
   */
  public record MoveResponse(Map<String, Object> jsonMap) {

    public String serialize() {
      try {
        Moshi moshi = new Moshi.Builder().build();
        JsonAdapter<Map<String, Object>> jsonAdapter = moshi.adapter(
            Types.newParameterizedType(Map.class, String.class, List.class, Move.class));
        return jsonAdapter.indent("  ").toJson(jsonMap);
      } catch (Exception e) {
        e.printStackTrace();
        throw e;
      }
    }
  }

}
