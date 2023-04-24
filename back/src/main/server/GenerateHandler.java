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

/**
 * Handler class for requests to the /map endpoint
 *
 * Returns a success response if the file was loaded by the server, or an appropriate error message
 * depending on what went wrong
 */
public class GenerateHandler implements Route {
  private RandomGenerator generator;

  public GenerateHandler(RandomGenerator generator) {
    this.generator = generator;
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
    // String difficulty = request.queryParams("difficulty");
    int length = Integer.parseInt(request.queryParams("length"));

    // Will keep track of mappings between fields and content that will be returned
    Map<String, Object> jsonMap = new LinkedHashMap<>();
    List<Move> moveSequence;

    try {
      moveSequence = this.generator.generate(length);

      jsonMap.put("result", "success");
      jsonMap.put("data", moveSequence);

      return new GenerateResponse(jsonMap);
    } catch (Exception e) {
      jsonMap.put("result", "error");
      return new GenerateResponse(jsonMap);
    }
  }

  /**
   * A JSON response that returns a success message if the sequence generation was successful, or an error message
   * if something went wrong
   *
   * @param jsonMap - the map that will be serialized into a JSON
   * @return this response, serialized as Json
   */
  public record GenerateResponse(Map<String, Object> jsonMap) {

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