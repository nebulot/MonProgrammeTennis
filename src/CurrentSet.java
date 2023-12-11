public class CurrentSet {
    private int wonGamesCountPlayer1;
    private int wonGamesCountPlayer2;
    private CurrentGame currentGame;

    public CurrentSet() {
        this.wonGamesCountPlayer1 = 0;
        this.wonGamesCountPlayer2 = 0;
        this.currentGame = new CurrentGame();

    }

    public void playPoint(String point) {

        currentGame.playPoint(point);
        if (currentGame.isGameFinished()) {
            updateSetScores();
            currentGame.resetGame(tieBreakGames());

        }

    }

    private void updateSetScores() {
        if (currentGame.getWonPointsCountPlayer1() > currentGame.getWonPointsCountPlayer2()) {
            wonGamesCountPlayer1++;
            //System.out.println(wonGamesCountPlayer1); 1234
        } else {
            wonGamesCountPlayer2++;
        }
        //published score
        System.out.println(currentGame.getWonPointsCountPlayer1() + "\n" + currentGame.getWonPointsCountPlayer2());//1445
    }
    //exception tiebreak
    boolean tieBreakGames() {
        boolean equalitySixGamesForAllPlayer = wonGamesCountPlayer1 == 6 && wonGamesCountPlayer2 == 6;
        return equalitySixGamesForAllPlayer;
    }

    boolean isSetFinished() {
        boolean sixGamesMinimumForAtLeastOnePlayer = wonGamesCountPlayer1 > 5 || wonGamesCountPlayer2 > 5;
        boolean atLeastTwoGamesDifference = Math.abs(wonGamesCountPlayer1 - wonGamesCountPlayer2) >= 2;
        return sixGamesMinimumForAtLeastOnePlayer && atLeastTwoGamesDifference;
    }

    public void resetSet() {
        wonGamesCountPlayer1 = 0;
        wonGamesCountPlayer2 = 0;
    }

    public int getWonGamesCountPlayer1() {
        return wonGamesCountPlayer1;
    }

    public int getWonGamesCountPlayer2() {
        return wonGamesCountPlayer2;
    }

    public CurrentGame getCurrentGame() {
        return currentGame;
    }
}




