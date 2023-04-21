package csv.rowobjects;

import java.util.Arrays;

public class Move {

    private int id;
    private String name;
    private String type;
    private int difficulty;
    private int[] links;

    public Move(int id, String name, String type, int difficulty, String links) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.difficulty = difficulty;
        this.links = stringToIntArray(links);
    }

    private int[] stringToIntArray(String s){
        String[] string = s.split(" ");

        int[] arr = new int[string.length];

        // parsing the String argument as a signed decimal
        // integer object and storing that integer into the
        // array
        for (int i = 0; i < string.length; i++) {
            arr[i] = Integer.valueOf(string[i]);
        }
        return arr;
    }

    @Override
    public String toString() {
        return "Move{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", difficulty=" + difficulty +
                ", links=" + Arrays.toString(links) +
                '}';
    }

    public int getId() {
        return id;
    }

    public int[] getLinks(){
        return this.links;
    }
}
