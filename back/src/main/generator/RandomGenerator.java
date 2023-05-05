package generator;

import csv.rowobjects.Move;

import java.util.*;

public class RandomGenerator {
    private List<Move> moves;
    private Map<String, List<Move>> moveCategories;

    /**
     * Constructs a RandomGenerator object with the given list of moves.
     *
     * @param moves a List of Move objects that will be used to generate new sequences of moves
     */
    public RandomGenerator(List<Move> moves){
        this.moves = moves;
        this.makeMoveCategories(moves);
    }

    /**
     * Creates a Map of move categories from the given List of moves.
     *
     * @param moves a List of Move objects that will be categorized by type
     */
    private void makeMoveCategories(List<Move> moves){
        this.moveCategories = new HashMap<>();
        this.moveCategories.put("Toprock", new ArrayList<>());
        this.moveCategories.put("Footwork", new ArrayList<>());
        this.moveCategories.put("Freeze", new ArrayList<>());
        this.moveCategories.put("Power", new ArrayList<>());
        this.moveCategories.put("Go-Down", new ArrayList<>());
        for(Move m : moves){
            this.moveCategories.get(m.getType()).add(m);
        }
    }

    /**
     * Returns the Map of move categories.
     *
     * @return a Map of String keys representing move types and List values of Move objects of that type
     */
    public Map<String, List<Move>> getMoveCategories(){
        return this.moveCategories;
    }

    /**
     * Generates a List of random Move objects of the given length.
     *
     * @param length the length of the desired sequence of moves
     * @return a List of random Move objects of the given length
     */
    public List<Move> generate(int length){
        int startIndex = this.moveCategories.get("Toprock").get((int)(Math.random()*this.moveCategories.get("Toprock").size())).getId();
        int toprockMoves = length/4;
        int footworkMoves = length-2;

        Map<Integer, Integer> visited = new HashMap<>();
        ArrayList<Integer>[] adjacencyList = new ArrayList[this.moves.size()];
        for(int i = 0; i< this.moves.size(); i++){
            adjacencyList[i] = new ArrayList<>();
        }

        for(Move m : this.moves){
            visited.put(m.getId(), 0);
            for(int link : m.getLinks()){
                adjacencyList[m.getId()].add(link);

            }
        }

        List<Move> res = new ArrayList<>();

        Stack<Move> stackingStacker = new Stack<Move>();

        stackingStacker.push(this.moves.get(startIndex));
        while (!stackingStacker.isEmpty()){
            Move current = stackingStacker.pop();
            if(visited.get(current.getId()) < 2) {
                res.add(current);
                visited.put(current.getId(), visited.get(current.getId())+1);
            }else{
                continue;
            }

            if(res.size() >= length) //move this
                break;

            //this code can be used to generate a tree if need be
            while(!adjacencyList[current.getId()].isEmpty()){
                Integer moveIndex;

                if(res.size() < toprockMoves) {
                    moveIndex = generateOnType("Toprock", adjacencyList[current.getId()]);
                }else if (res.size() == toprockMoves){
                    res.add(this.moveCategories.get("Go-Down").get((int)(Math.random()*this.moveCategories.get("Go-Down").size())));
                    moveIndex = this.moveCategories.get("Footwork").get((int)(Math.random()*this.moveCategories.get("Footwork").size())).getId();
                }else if (res.size() < footworkMoves) {
                    moveIndex = generateOnType("Footwork", adjacencyList[current.getId()]);
                }else if (res.size() == length-2){
                    int flagIndex = generateOnType("Power", adjacencyList[current.getId()]);

                    if(flagIndex == -1){
                        moveIndex = generateOnType("Footwork", adjacencyList[current.getId()]);
                    }else{
                        moveIndex = flagIndex;
                    }
                }else{
                    moveIndex = generateOnType("Freeze", adjacencyList[current.getId()]);
                }

                if(moveIndex == -1){
                    break;
                }
                if(visited.get(moveIndex) < 2){
                    stackingStacker.push(this.moves.get(moveIndex));
                    break;
                }else{
                    adjacencyList[current.getId()].remove(moveIndex);
                    stackingStacker.push(current);
                }
            }
        }
        return res;
    }

    /**
     * Generates a random Move object of the given type from the list of available moves.
     *
     * @param type the type of move to generate (e.g. "Toprock", "Footwork")
     * @param availableMoves a List of Integer move IDs that are available to generate from
     * @return the ID of a randomly generated Move object of the given type, or -1 if none are available
     */
    private int generateOnType(String type, ArrayList<Integer> availableMoves){
        ArrayList<Move> filteredMoves = new ArrayList<Move>();
        for(Integer i: availableMoves){
            if(this.moveCategories.get(type).contains(this.moves.get(i))){
                filteredMoves.add(this.moves.get(i));
            }
        }
        if(filteredMoves.isEmpty()){
            return -1;
        }
        return filteredMoves.get((int)(Math.random()*filteredMoves.size())).getId();
    }

    /**
     * Helper method used for testing generateOnType method.
     *
     * @param type the type of move to generate (e.g. "Toprock", "Footwork")
     * @param availableMoves a List of Integer move IDs that are available to generate from
     * @return the ID of a randomly generated Move object of the given type, or -1 if none are available
     */
    public int testGenerateOnType(String type, ArrayList<Integer> availableMoves){
        return generateOnType(type, availableMoves);
    }
}
