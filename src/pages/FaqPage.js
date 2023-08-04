import React from 'react';
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import MainTemplates from '../templetaes/MainTemplates';

const FaqPage = () => {
  return (
    <div><MainTemplates>
    <Box py="20" maxW="800px" mx="auto">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Czy dostęp do serwisu wymaga rejestracji?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
            Tak, nasz serwis jest dostępny tylko dla zarejestrowanych użytkowników.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Jakie są formy płatności za filmy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
            Obecnie akceptujemy płatności za filmy wyłącznie kryptowalutami oraz BLIKiem.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                  Dostaję maile/powiadomienia o dyskusjach na forach, w których biorę udział. Jak mogę z nich zrezygnować?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
          W swoim profilu wejdź w zakładkę "Obserwuję", a potem wciśnij przycisk "Ustawienia obserwowanych". 
          Na tej stronie będziesz mógł dokładnie wybrać, jakie powiadomienia i jaką drogą chcesz od nas otrzymywać.
          </AccordionPanel>
        </AccordionItem>

         <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                  Dostaję maile/powiadomienia o dyskusjach na forach, w których biorę udział. Jak mogę z nich zrezygnować?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
          W swoim profilu wejdź w zakładkę "Obserwuję", a potem wciśnij przycisk "Ustawienia obserwowanych". 
          Na tej stronie będziesz mógł dokładnie wybrać, jakie powiadomienia i jaką drogą chcesz od nas otrzymywać.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Dlaczego w rubryce "Chcę obejrzeć" w profilu pokazują się filmy, które już widziałem/widziałam?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
          To znaczy, że zaznaczyłeś/zaznaczyłaś, że chcesz ten film obejrzeć ponownie.
          </AccordionPanel>
        </AccordionItem>

         <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Do czego służy opcja "nie chce zobaczyć" przy filmie i serialu?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
          Jeśli zaznaczysz tę opcję przy konkretnym tytule, Filmweb przygotowując dla Ciebie rekomendacje, 
          a także pokazując listy filmów Twoich znajomych, nie będzie go brał pod uwagę.
          </AccordionPanel>
        </AccordionItem>


        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Czy inni użytkownicy widzą mojego maila i adres IP?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
          Inni użytkownicy nie widzą ani Twojego maila, ani adresu IP.
          </AccordionPanel>
        </AccordionItem>


        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                  Jak mogę usunąć konto?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
          Aby zrezygnować z konta, należy przesłać informację pod tytułem "Rezygnacja z konta" na adres: pomoc@pomoc.pl. 
          Informacja musi być przesłana z adresu mailowego, który jest obecnie przypisany do konta. 
          Rezygnacja z konta jest równoznaczna z rozwiązaniem umowy o świadczeniu usług drogą elektroniczną i usunięciem danych osobowych Użytkownika z bazy.
          </AccordionPanel>
        </AccordionItem>


        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              W jaki sposób mogę zmienić swoją nazwę użytkownika/nick?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
          Niestety nie ma możliwości zmiany nazwy użytkownika wybranej podczas rejestracji.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Chciałbym zresetować zapomniane hasło, ale nie mam już dostępu do maila przypisanego do konta. Co zrobić?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
          W takim przypadku należy wysłać wiadomość z opisem problemu na adres pomoc@filmweb.pl.
          </AccordionPanel>
        </AccordionItem>
        {/* Dodaj więcej pytań i odpowiedzi jako kolejne elementy AccordionItem */}
      </Accordion>
    </Box>
    </MainTemplates></div>
  );
};

export default FaqPage;
