package controll;

import gui.Gui;
import java.util.ArrayList;
import java.util.List;

public class Converter {

	// public String convertCodeToJson(String code): Eine öffentliche Methode, die einen String als Eingabe (code) nimmt und ihn in einen JSON-String konvertiert
    public String convertCodeToJson(String code) {
    	
    	// Teilt den Eingabe-String code in einzelne Zeilen auf, die durch Zeilenumbrüche getrennt sind
        String[] lines = code.split("\n");
        // Erstellt eine neue Liste content vom Typ ArrayList, um die einzelnen Zeilen zu speichern
        List<String> content = new ArrayList<>();
        
        // Iteriert über die Zeilen und fügt jede Zeile zur content-Liste hinzu
//        for (String line : lines) {
//            content.add(line);  
//        }
        for (int i = 0; i < lines.length; i++) {
            content.add(lines[i]);
        }

        // Ruft die Methode formatAsJson auf, um die content-Liste in einen JSON-String zu konvertieren und gibt diesen zurück
        return formatAsJson(content);
    }

    // Eine private Methode, die eine Liste von Strings (content) in einen JSON-String formatiert
    private String formatAsJson(List<String> content) {
    	/*
    	 * StringBuilder: Ein StringBuilder ist eine Klasse in Java, die verwendet wird, 
    	 * um veränderbare (mutable) Sequenzen von Zeichen effizient zu erstellen und zu bearbeiten. Es ist nützlich, 
    	 * wenn man viele Zeichenoperationen durchführen muss, weil es Änderungen am String effizienter handhabt als die String-Klasse
    	 * 
    	 * */
        StringBuilder jsonBuilder = new StringBuilder();
        // Start
        jsonBuilder.append("{\n");
        jsonBuilder.append("  \"content\": [\n");

        for (int i = 0; i < content.size(); i++) {
            jsonBuilder.append("    \"").append(escapeJson(content.get(i))).append("\"");
            // Wenn der Index i kleiner ist als der letzte Index der Liste content, füge ein Komma am Ende hinzu und gehe zur nächsten Zeile in der Liste
            if (i < content.size() - 1) {
                jsonBuilder.append(",");
            }
            jsonBuilder.append("\n");
        }
        
        // Ende
        jsonBuilder.append("  ]\n");
        jsonBuilder.append("}");
        // wenn der JSON-String vollständig ist, wird jsonBuilder.toString() aufgerufen, um den kompletten String zu erstellen. Dieser String wird dann von der Methode zurückgegeben
        return jsonBuilder.toString();
    }
    // Diese Methode maskiert spezielle Zeichen in einem JSON-String, um sicherzustellen, dass der JSON-String korrekt formatiert ist
    private String escapeJson(String str) {
        return str.replace("\\", "\\\\")
                  .replace("\"", "\\\"")
                  .replace("\b", "\\b")
                  .replace("\f", "\\f")
                  .replace("\n", "\\n")
                  .replace("\r", "\\r")
                  .replace("\t", "\\t");
    }
}
