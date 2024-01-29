***
### Instalacja

1. Sklonuj repozytorium:

``` bash

git clone https://github.com/bpajor/cgenius---copy-.git

```

2. Zainstaluj zależności:

```bash
npm install
```

3. Uruchom serwer:

``` bash
npm start
```

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


