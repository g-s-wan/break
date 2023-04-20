package generator;

import csv.rowobjects.Move;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class RandomGenerator {
    List<Move> moves;
    public RandomGenerator(List<Move> moves){
        this.moves = moves;
    }

    public List<Move> generate(){
        int startIndex = (int)(Math.random()*this.moves.size());
        //int startIndex = 6;

        ArrayList<Integer>[] adjacencyList = new ArrayList[this.moves.size()];
        for(int i = 0; i< this.moves.size(); i++){
            adjacencyList[i] = new ArrayList<>();
        }

        for(Move m : this.moves){
            for(int link : m.getLinks()){
                adjacencyList[m.getId()].add(link);
            }
        }

        boolean[] visited = new boolean[this.moves.size()];
        List<Move> res = new ArrayList<>();

        Stack<Move> stackingStacker = new Stack<Move>();

        stackingStacker.push(this.moves.get(startIndex));
        while (!stackingStacker.isEmpty()){
            Move current = stackingStacker.pop();
            // keep a direct link to the node via the key
            if(!visited[current.getId()]) {
                res.add(current);
                visited[current.getId()] = true;
            }else{
                continue;
            }

            //this code can be used to generate a tree if need be


            while(!adjacencyList[current.getId()].isEmpty()){
                Integer moveIndex = adjacencyList[current.getId()].get(((int)(Math.random()*adjacencyList[current.getId()].size())));
                if(moveIndex == -1){
                    break;
                }
                if(!visited[moveIndex]){
                    stackingStacker.push(this.moves.get(moveIndex));
                    break;
                }else{
                    adjacencyList[current.getId()].remove(moveIndex);
                }
            }
        }
        return res;
    }
}
