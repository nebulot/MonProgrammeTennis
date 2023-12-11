import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {


        // Published and used 3 args
        String namePlayer1 = args[0];
        String namePlayer2 = args[1];
        String listPoint0and1 = args[2];

        // create a dynamic array that will store the values of players 1 and 2
        List<String> pointsPlayer1 = new ArrayList<>();
        //System.out.println(pointsPlayer1); []



        char[] tabListOf0and1 = listPoint0and1.toCharArray();
        for (char indexListPoint0and1 : tabListOf0and1) {
            pointsPlayer1.add(String.valueOf(indexListPoint0and1));
        }
        String[] scoreJeu = {"00", "15", "30", "40"};
        List<String> scoresJoueur1 = new ArrayList<>();
        int scoreIndexJoueur1 = 0;
        int sommePointsJoueur1DuJeuCourant = 0;
        for (String point : pointsPlayer1) {
            int pointValue = Integer.parseInt(point);
            scoreIndexJoueur1 = Math.min(3, scoreIndexJoueur1 + pointValue);
            sommePointsJoueur1DuJeuCourant += pointValue;
            scoresJoueur1.add(scoreJeu[scoreIndexJoueur1]);
        }
            int globalScoreIndexJoueur1 = scoreIndexJoueur1;
            String scoreFinalJoueur1 = scoreJeu[globalScoreIndexJoueur1];





        //create instance MATCH
        Match match = new Match();
        match.playMatch(pointsPlayer1);

        int wonPointsCountPlayer1 = match.getCurrentSet().getCurrentGame().getWonPointsCountPlayer1();

        if (wonPointsCountPlayer1 < 4) {
            scoreFinalJoueur1 = scoreJeu[wonPointsCountPlayer1];
        }

        if (match.getWonSetsCountPlayer1() > match.getWonSetsCountPlayer2()){
            System.out.println("Bravo Joueur 1");
        }


        //System.out.println(scoreJeu); //memoire

        /*System.out.println(listResultPointPlayer1);[]
        //System.out.println(pointsPlayer1); [0;1;1;1;1]
        pointsPlayer1.add(scoreJeu[match.getWonSetsCountPlayer1()]);
        System.out.println(pointsPlayer1)*/



        //published score
        System.out.println( namePlayer1 + " " + match.getWonSetsCountPlayer1() + " " + match.getCurrentSet().getWonGamesCountPlayer1() + " " + scoreFinalJoueur1 + "\n"
                + namePlayer2 + " " + match.getWonSetsCountPlayer2() + " " + match.getCurrentSet().getWonGamesCountPlayer2());

    }
}
