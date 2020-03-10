package mainbestofseven1509;
import java.util.Scanner;

/**
 * @author aneta
 *
 */
public class Bestofseven1509Launcher {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// maak twee arrays om aantal gescoorde punten opslaan voor beide teams . Er mogen MAX 7 wedstrijden gespeeld worden (CONSTATNTEN)

		final int MAX=7;
		int aantalWinst1=0;
		int aantalWinst2=0;
		int gespeeldeedstrijd=0;
		Scanner input=new Scanner(System.in);
		System.out.println("naam team1: ");
		String naamteam1=input.nextLine();
		System.out.println("naam team2: ");
		String naamteam2=input.nextLine();
		// ARRAYS VOOR BEIDE TEAM MAKEN, LENGTE IS GELIJK AAN MAX AANTAL WEDSTRIJDEN

		int [] puntenteam1 = new int [MAX];
		int [] puntenteam2=new int [MAX];
		// ZODRA EEN VAN TEAMS 4 WEDSTRIJDEN HEEFT GEWONNEN STOPT DE LOOP
		for (int i=0; aantalWinst1 < 4 && aantalWinst2 < 4;i++) {
			System.out.println("uitslag wedstrijd "+(i+1));
			System.out.print("aantal "+naamteam1+" : ");
			puntenteam1[i]=input.nextInt();
			System.out.print("aantal "+naamteam2+" : ");
			puntenteam2[i]=input.nextInt();
			// aantal gespeelde wedstrijden worden bijgehouden, de variablen boveaan zijn aangemaakt. een team heeft gewonnen als het meer punten heeft gehaald dan het andere team 
			if (puntenteam1[i] > puntenteam2[i]) {
				aantalWinst1++;
			} else {
				aantalWinst2++;
			}
			gespeeldeedstrijd++;

		}
		System.out.println("aantal gespeelde wedstrijden "+gespeeldeedstrijd);
		berekenWinnar(naamteam1,naamteam2, aantalWinst1,aantalWinst2);
		
		for (int i=0; i< gespeeldeedstrijd;i++) {
		System.out.println("wedstrijd "+(i+1)+" "+naamteam1+"-"+naamteam2+"  -  "+puntenteam1[i]+"-"+puntenteam2[i]); // VRAAG AAN ASTRID: (+1) hiermee wil aantal wedstrijden oplopend, maar dat werkt niet
		}
	}	
	
	public static void berekenWinnar(String naamteam1,String naamteam2, int aantalWinst1,int aantalWinst2) {
	// druk winnar die 4 wedstrijden heeft gewonnen
		if (aantalWinst1>aantalWinst2) {
			System.out.println(naamteam1+" heeft gewonnen met "+aantalWinst1+aantalWinst2);

		} else {
			System.out.println(naamteam2+" heeft gewonnen met "+aantalWinst2+aantalWinst1);

		}
	}

}
