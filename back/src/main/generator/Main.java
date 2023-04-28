package src.main.generator;

import csv.FactoryFailureException;
import csv.Parser;
import csv.rowobjects.Move;

import java.io.FileReader;
import java.io.IOException;
import generator.RandomGenerator;
import src.main.csv.rowcreators.MoveCreator;

public class Main {
    public static void main (String[] args)throws IOException, FactoryFailureException {
        Parser<Move> parser = new Parser<>(new FileReader("data/Sample_Data.csv"), new MoveCreator(), true);
        RandomGenerator generator = new RandomGenerator(parser.parseLines());
        System.out.println(generator.generate(5));
    }
}
