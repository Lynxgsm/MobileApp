import React from "react";
import { ScrollView } from "react-native";
import CardList from "../components/CardList";

const Sejour = () => {

    return (

        <ScrollView>

            <CardList image={require('../assets/holiday_7.jpg')} titre="Location"
                soustitre="Débute votre premier séjour ?"
                paragraphe="
                Ça commence bien avant l’arrivée. Au téléphone avec vos conseillers déjà cette aventure dorée, cette expérience amplifiée par le vécu de votre interlocuteur, prend vie.
                "
                id={1}
            />
            <CardList image={require('../assets/wewdd_3.jpg')} titre="Mariage"
                soustitre="Le plus beau jour de votre vie à Marrakech"
                paragraphe="Votre mariage est pour bientôt ? Félicitations les amoureux ! Un moment aussi beau que l’union de deux personnes doit être célébré d’une manière originale."

            />
            <CardList image={require('../assets/seminaire_1.jpg')} titre="Séminaire"
                soustitre="Confiez votre séminaire à des spécialistes."
                paragraphe="Un Séminaire Marrakech pour une entreprise est aujourd’hui important pour maintenir une bonne cohésion et une bonne entente au sein de votre entreprise. "

            />
            <CardList image={require('../assets/side-view-delicious-pancakes-decoration-accessories-purple-towel-chocolate-raspberry-black.jpg')} titre="Anniversaire"
                soustitre="Venez faire la fête à Marrakech !"
                paragraphe="
                Depuis 2017, findyourconcierge.com a réalisé des dizaines de fêtes d’anniversaire.
Alors quelle que soit la circonstance, nous ferons de ce jour magique un jour inoubliable.
                "

            />

            <CardList image={require('../assets/evt_5.jpg')} titre="L'évenementiel"
                soustitre="L'évenementiel à Maroc"
                paragraphe="
                Depuis 2017, findyourconcierge.com a réalisé des dizaines de fêtes d’anniversaire.
Alors quelle que soit la circonstance, nous ferons de ce jour magique un jour inoubliable.
                "

            />




        </ScrollView>

    )

}

export default Sejour;