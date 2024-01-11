# CorrectorGenius - Aplikacja webowa do poprawiania tekstu

##### Instrukcja dla aplikacji webowej - w wersji statycznej.

***

Witaj w **CorrectorGenius**, aplikacji internetowej stworzonej do ulepszania tekstu poprzez korektę gramatyki, słownictwa, interpunkcji i wielu innych aspektów. Aplikacja wykorzystuje interfejs API OpenAI, co pozwala na szybkie i skuteczne korekty tekstu. Poniżej znajduje się szczegółowy opis kluczowych komponentów: 

***
#### Pliki:

**index.html:**
- Główny plik HTML zawierający strukturę strony internetowej.
- Obejmuje obszary wprowadzania tekstu użytkownika oraz dodatkowego kontekstu - instrukcji.
- Wyświetla poprawiony tekst oraz zawiera przycisk "sumbit" do "wysyłki" wprowadzonego tekstu.



**style.css:**
- Definiuje stylowanie strony internetowej.
- Stylizuje różne elementy, takie jak nagłówki, obszary wprowadzania tekstu oraz przycisk do wysyłki.
- Implementuje kolorowy system podświetlania dla usuniętego i dodanego tekstu.


**script.js:**
- Zarządza interakcjami użytkownika i komunikuje się z interfejsem API OpenAI.
- Nasłuchuje zdarzenia kliknięcia na przycisku "sumbit".
- Pobiera dane wprowadzone przez użytkownika i instrukcje, a następnie wysyła zapytanie do API OpenAI.
- Przetwarza odpowiedź API w celu wygenerowania kolorowego podświetlenia różnic w tekście.
- Aktualizuje stronę internetową z poprawionym tekstem.

**.env-template:**
- szablonu pliku .env który zawiera zmienne środowiskowe, ale bez konkretnych wartości
- ułatwi innym osobom w uzupełnieniu rzeczywistych wartości w pliku .env, gdy będzie to potrzebne.

***
#### Konfiguracja klucza API OpenAI:

W pliku **script.js**, w miejscu oznaczonym jako **process.env.OPENAI_API_KEY**, zakłada się, że klucz API OpenAI jest przechowywany jako zmienna środowiskowa w pliku **.env**. 

Aby skonfigurować klucz, skorzystaj z pliku **.env-template** dostępnego w projekcie. Skopiuj ten plik jako **.env** i uzupełnij go swoim kluczem, jego zawartość powinna wyglądać mniej więcej tak:
> OPENAI_API_KEY=sk-...



***


#### Użycie:

- Otwórz plik index.html w przeglądarce internetowej.
- Wprowadź lub wklej tekst do odpowiedniego obszaru.
- Dodaj konrektną instrukcję np. "Correct grammar".
- Kliknij przycisk "Submit", aby rozpocząć proces korekty.
- Obejrzyj poprawiony tekst z kolorowym wyróżnieniem zmian.


