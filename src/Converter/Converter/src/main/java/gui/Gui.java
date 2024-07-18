package gui;

import controll.Converter;
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


// JFrame ist das Hauptfenster der Anwendung, und das Hinzufügen des Panels sorgt dafür, dass die darin enthaltenen Komponenten im Fenster angezeigt werden
public class Gui extends JFrame {
   
	private static final long serialVersionUID = 1L;
	private JTextArea inputTextArea;
    private JTextArea outputTextArea;
    private JButton convertButton;
    private Converter converter;

    // Konstruktor
    public Gui() {
    	
    	// externe Methode Verwandung von Swing Labrory
        setTitle("Java Code to JSON Converter");
        setSize(800, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // intialesierung von Objekten
        converter = new Converter();
        inputTextArea = new JTextArea();
        outputTextArea = new JTextArea();
        convertButton = new JButton("Convert");

        // für die Scroll Funktionalität weil die JTextArea statisch ist
        JScrollPane inputScrollPane = new JScrollPane(inputTextArea);
        JScrollPane outputScrollPane = new JScrollPane(outputTextArea);

        // JPanel ist ein Container, der verwendet wird, um andere GUI-Komponenten zu gruppieren
        JPanel panel = new JPanel();
        
        /*
         * panel.setLayout(...) legt das Layout-Manager für das Panel fest
         * Container target: Der Container, dem das Layout zugewiesen wird. In diesem Fall ist es das JPanel-Objekt panel
         * BoxLayout ist ein Layout-Manager, der Komponenten in einer einzelnen Reihe anordnet – entweder horizontal (BoxLayout.X_AXIS) oder vertikal (BoxLayout.Y_AXIS)
         * 
         * */
        panel.setLayout(new BoxLayout(panel, BoxLayout.X_AXIS));
        panel.add(inputScrollPane);
        panel.add(convertButton);
        panel.add(outputScrollPane);
        
        // Hinzufügen des Panels zum JFrame
        add(panel);
        
        /*
         * new ActionListener() { ... }: Dies ist eine anonyme innere Klasse, die das ActionListener-Interface implementiert
         * Eine anonyme innere Klasse wird verwendet, um eine Instanz einer Klasse zu erstellen und zu initialisieren, 
         * ohne eine separate benannte Klasse zu definieren
         * */
        convertButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                handleConvertAction();
            }
        });
    }


    private void handleConvertAction() {
    	// inputTextArea.getText(): Ruft den Text aus dem inputTextArea (dem Eingabe-Textfeld) ab. Diese Methode gibt den gesamten Text zurück, der im Textfeld eingegeben wurde
        String inputCode = inputTextArea.getText();
       
        /*
         * converter.convertCodeToJson(inputCode): Ruft die Methode convertCodeToJson der Converter-Klasse auf. 
         * Diese Methode nimmt den Java-Code (inputCode) als Eingabe und gibt das JSON-Format als String zurück.
         * 
         * */
        String jsonOutput = converter.convertCodeToJson(inputCode);
        outputTextArea.setText(jsonOutput);
    }

    public static void main(String[] args) {
    	// new Runnable() { ... }: Erstellt eine anonyme innere Klasse, die das Runnable-Interface implementiert. Diese Klasse enthält die run-Methode, die den Code enthält, der im EDT ausgeführt wird
        SwingUtilities.invokeLater(new Runnable() {
            // die den Code enthält, der im EDT ausgeführt werden soll
        	@Override
            public void run() {
            	// Erstellt eine neue Instanz der Gui-Klasse, die ein JFrame ist und die Benutzeroberfläche darstellt
                new Gui().setVisible(true);
            }
        });
    }
}
