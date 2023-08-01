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
        {/* Dodaj więcej pytań i odpowiedzi jako kolejne elementy AccordionItem */}
      </Accordion>
    </Box>
    </MainTemplates></div>
  );
};

export default FaqPage;
