package generator;

import csv.FactoryFailureException;
import csv.Parser;
import csv.rowcreators.MoveCreator;
import csv.rowobjects.Move;

import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main (String[] args)throws IOException, FactoryFailureException {
        Parser<Move> parser = new Parser<>(new FileReader("data/Sample_Data.csv"),new MoveCreator(), true);
        RandomGenerator generator = new RandomGenerator(parser.parseLines());
        System.out.println(generator.generate());
    }
}
