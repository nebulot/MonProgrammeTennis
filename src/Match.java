import java.util.List;


public class Match {
    private int wonSetsCountPlayer1;
    private int wonSetsCountPlayer2;

    //same orga currentSet
    private CurrentSet currentSet;

    //constructor

    public Match() {
        this.currentSet = new CurrentSet();
        this.wonSetsCountPlayer1 = 0;
        this.wonSetsCountPlayer2 = 0;


    }

    public CurrentSet getCurrentSet() {
        return currentSet;
    }

    public void playMatch(List<String> points) {
        for (String point : points) {
            currentSet.playPoint(point);
            if (currentSet.isSetFinished()) {
                updateMatchScores();
                currentSet.resetSet();
            }
        }
        //published score
        System.out.println((currentSet.getWonGamesCountPlayer1()) + "\n" + (currentSet.getWonGamesCountPlayer2())) ;



    }




    /*public String getFinalResult() {
        if (currentSet != null && currentSet.getCurrentGame() != null) {
            return currentSet.getWonSetsCountPlayer1() + " " + currentSet.getWonGamesCountPlayer1() + " " + currentSet.getCurrentGame().getWonPointsCountPlayer1() +
                    "\n" + currentSet.getWonSetsCountPlayer2() + " " + currentSet.getWonGamesCountPlayer2() + " " + currentSet.getCurrentGame().getWonPointsCountPlayer2();
        } else {
            return "false";
        }
    }*/


    private void updateMatchScores() {
        if (currentSet.getWonGamesCountPlayer1() > currentSet.getWonGamesCountPlayer2()) {
            wonSetsCountPlayer1++;
        } else {
            wonSetsCountPlayer2++;
        }

    }

    public void resetMatch() {
        wonSetsCountPlayer1 = 0;
        wonSetsCountPlayer2 = 0;
    }

    public int getWonSetsCountPlayer1() {
        return wonSetsCountPlayer1;
    }

    public int getWonSetsCountPlayer2() {
        return wonSetsCountPlayer2;
    }


}




