# Struktura Aplikacji Webowej

## Plik `index.html`

### Elementy struktury strony:
- `<textarea id="user-input">`: Pole do wprowadzenia tekstu przez użytkownika.
- `<textarea id="user-instruction">`: Pole do wprowadzenia instrukcji dotyczącej rodzaju poprawek.
- `<button id="submit-btn">`: Przycisk do wysyłania tekstu do analizy.

## Plik `script.js`

### Zmienne:
- `userInput`: Zawiera tekst wprowadzony przez użytkownika.
- `userInstruction`: Zawiera instrukcje wprowadzone przez użytkownika.

### Funkcje i ich działanie:
- **Nasłuchiwanie na przycisku "submit"**: Aktywuje proces korekty tekstu po kliknięciu.
- **Wysyłanie zapytania do API**: Tworzy zapytanie do serwera z tekstem i instrukcją użytkownika.
- **Odbieranie i przetwarzanie odpowiedzi**: Otrzymuje poprawiony tekst z serwera i wyświetla go użytkownikowi.
- **Tworzenie różnicy między poprawnym a nie poprawnym tekstem**: Otrzymaną odpowiedź porównuje do inputu użytkownika i tworzy między nimi różnicę, aby użytkownik mógł zauważyć gdzie się myli.

## Plik `styles.css`

### Stylizacja:
- `body`: Definiuje ogólny wygląd strony (np. czcionka, kolor tła).
- **Elementy tekstowe i przyciski**: Określa wygląd pól tekstowych i przycisków.
 
## Serwer (`server.js`)

Serwer wykorzystuje Node.js z frameworkiem Express oraz dodatkowymi modułami takimi jak `node-fetch` i `cors`.

### Zależności:
- `express`: Framework do tworzenia serwera HTTP.
- `node-fetch`: Umożliwia wykonywanie zapytań HTTP (np. do API OpenAI).
- `cors`: Middleware do obsługi Cross-Origin Resource Sharing (CORS), co pozwala na komunikację między serwerem a klientem z różnych źródeł.

### Konfiguracja Serwera:
- **Inicjalizacja express**: Tworzy instancję serwera Express.
- **Middleware**:
  - `express.json()`: Obsługuje dane JSON w żądaniach HTTP.
  - `cors()`: Aktywuje CORS dla wszystkich żądań.
- **Endpoint `/api/correct`**:
  - **Metoda POST**: Przyjmuje żądanie HTTP POST.

### Przetwarzanie Żądania:
- Pobiera `userInput` i `userInstruction` z ciała żądania.
- Wykonuje zapytanie do API OpenAI, używając `fetch`.

### Konfiguracja Zapytania do API OpenAI:
- Ustawia nagłówki (typ zawartości, autoryzację z kluczem API).
- Tworzy ciało zapytania z modelem (np. 'gpt-3.5-turbo') i przekazuje dane użytkownika oraz instrukcję.

### Odpowiedź od API:
- Oczekuje na odpowiedź od API OpenAI i konwertuje ją na format JSON.
- Przesyła otrzymane dane do klienta.

### Nasłuchiwanie na Porcie 3000:
- Serwer uruchamia się i nasłuchuje na porcie 3000, co jest wskazywane w konsoli.

## Opis użytych funkcji

1. `require()`
   - Użycie: Ładuje moduły wymienione jako argumenty.
   - Cel: Umożliwia wykorzystanie funkcjonalności modułów.

2. `express()`
   - Użycie: Inicjalizuje aplikację Express.
   - Cel: Stworzenie instancji serwera.

3. `app.use()`
   - Użycie: Rejestruje middleware.
   - Cel: Umożliwia obsługę danych JSON i CORS.

4. `app.post()`
   - Użycie: Definiuje obsługę żądań HTTP POST.
   - Cel: Obsługa żądań do `/api/correct`.

5. `fetch()`
   - Użycie: Wykonuje zapytanie HTTP.
   - Cel: Komunikacja z API OpenAI.

6. `response.json()`
   - Użycie: Konwertuje odpowiedź HTTP na JSON.
   - Cel: Przetwarzanie danych z API.

7. `res.json()`
   - Użycie: Wysyła odpowiedź JSON.
   - Cel: Zwraca dane do użytkownika.

8. `app.listen()`
   - Użycie: Uruchamia serwer na określonym porcie.
   - Cel: Nasłuchiwanie na żądania klientów.
