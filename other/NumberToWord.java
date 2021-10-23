import java.util.*;
public class NumberToWord {
    static String[] digits = "one two three four five six seven eight nine".split(" ");
    static String[] tens = "ten twenty thirty fourty fifty sixty seventy eighty ninety".split(" ");
    static String[] specials = "eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    static String[] big = "thousand million billion thrillion quadrillion quintillion sextillion septillion octillion nonillion decillion undecillion duodecillion sexdecillion septendecillion octodecillion novemdecillion vigintillion".split(" ");

    public static ArrayList<String> groups(String n) {
        n = n.length()%3 != 0 ? repeat("0", 3-n.length()%3) + n : n;
        var g = new ArrayList<String>();
        while (n.length() != 0) {
            g.add(n.substring(n.length()-3));
            n = n.substring(0, n.length() - 3);
        }
        return g;
    }

    private static String repeat(String s, int n) {
        return n > 0 ? s + repeat(s, n-1) : "";
    }

    public static String convert(String n) {
        if (n.equals("0")) return "zero";
        var res = "";
        var gid = 0;
        var group = groups(n);
        for (var g : group) {
            var d = g.split("");
            var h = d[0].equals("0") ? "" : digits[Integer.parseInt(d[0]) - 1] + " hundred ";
            if (d[1].equals("1")) {

            switch (d[2]) {
                case "0":
                    res = h + " ten " + " " + (gid != 0 ? big[gid-1] : "") + " " + res;
                    break;
                default:
                    res = h + specials[Integer.parseInt(d[2])-1] + " " + (gid != 0 ? big[gid-1] : "") + " " + res;
            }
            } 
            else {
                res = h + (d[1].equals("0") ? "" : tens[Integer.parseInt(d[1]) - 1]) + " " + (d[2].equals("0") ? "" : digits[Integer.parseInt(d[2]) - 1]) + " " +(gid != 0 ? big[gid-1] : "" ) + " " + res;
            }
            gid++;
        }
        return res;
    }
        public static void main(String[] args) {
            String cin = new Scanner(System.in).nextLine();
            System.out.println("\t\tNumber to Word Converter   \nInput: " + cin + "\nOutput: " + convert(cin));
        }
}
