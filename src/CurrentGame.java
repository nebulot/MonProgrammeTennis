import java.util.ArrayList;
import java.util.List;

public class CurrentGame {

    private int wonPointsCountPlayer1;
    private int wonPointsCountPlayer2;


    private boolean tiebreak;

    //private List<String> pointsPlayer1;

    //constructor
    public CurrentGame() {
        this.wonPointsCountPlayer1 = 0;
        this.wonPointsCountPlayer2 = 0;
        //this.pointsPlayer1 = pointsPlayer1;

    }


    //add 1 point
    public void addPointToPlayer1() {
        wonPointsCountPlayer1++;
        //System.out.println(wonPointsCountPlayer1); //12345678123412344
    }

    // add 1 point for the seconde player
    public void addPointToPlayer2() {
        wonPointsCountPlayer2++;
        //System.out.println(wonPointsCountPlayer2);//12345640
    }

    public void playPoint(String point) {

        if (point.equals("1")) {
            addPointToPlayer1();

        } else {
            addPointToPlayer2();
        }
    }

    //exception tiebreak
    public boolean isGameFinished() {
        // Condition for win a points and win a game to finish the game
        boolean fourPointsMinusForOnePlayer = wonPointsCountPlayer1 > 3 || wonPointsCountPlayer2 > 3;
        boolean sevenPointsMinus = wonPointsCountPlayer1 > 6 || wonPointsCountPlayer2 > 6;

        boolean minusTwoPointsBetweenTwoPlayers = ((wonPointsCountPlayer1 - wonPointsCountPlayer2) >= 2) || ((wonPointsCountPlayer2 - wonPointsCountPlayer1) >= 2);

        return minusTwoPointsBetweenTwoPlayers &&
                ((!tiebreak && fourPointsMinusForOnePlayer) || (tiebreak && sevenPointsMinus));
    }


    public void resetGame(boolean isTieBreak) {
        wonPointsCountPlayer1 = 0;
        wonPointsCountPlayer2 = 0;
        tiebreak = isTieBreak;
    }


    public int getWonPointsCountPlayer1() {
        return wonPointsCountPlayer1;
    }

    public int getWonPointsCountPlayer2() {
        return wonPointsCountPlayer2;
    }

}










