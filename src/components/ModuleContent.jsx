import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'
import { 
  CheckCircle, 
  ArrowLeft, 
  ChevronRight, 
  Clock,
  BookOpen,
  Target,
  Lightbulb,
  TrendingUp,
  BarChart3,
  PieChart,
  Shield
} from 'lucide-react'

const moduleContents = {
  1: {
    title: "Les Fondamentaux de l'Investissement",
    description: "Découvrez les concepts de base : risque, rendement, diversification et l'écosystème financier marocain",
    sections: [
      {
        id: 1,
        title: "Introduction au Module",
        icon: BookOpen,
        content: `
          <div class="space-y-6">
            <p class="text-lg leading-relaxed">
              Bienvenue dans le premier module de votre parcours d'apprentissage avec Igodar Digital ! 
              Ce module est conçu pour vous fournir les bases solides nécessaires pour naviguer avec confiance 
              dans le monde de l'investissement financier, spécifiquement adapté au contexte du marché marocain.
            </p>
            
            <div class="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
              <h3 class="font-semibold text-primary mb-2">Objectif Principal</h3>
              <p>Démystifier l'investissement et vous aider à comprendre pourquoi et comment il peut être 
              un outil puissant pour atteindre vos objectifs financiers.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-4 bg-card border rounded-lg">
                <h4 class="font-semibold mb-2">Pour qui ?</h4>
                <p class="text-sm text-muted-foreground">Débutants complets ou personnes souhaitant rafraîchir leurs connaissances</p>
              </div>
              <div class="p-4 bg-card border rounded-lg">
                <h4 class="font-semibold mb-2">Contexte</h4>
                <p class="text-sm text-muted-foreground">Spécifiquement adapté au marché financier marocain</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 2,
        title: "Objectifs d'Apprentissage",
        icon: Target,
        content: `
          <div class="space-y-6">
            <p class="text-lg">À la fin de ce module, vous serez capable de :</p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle class="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-green-800">Comprendre les concepts de base</h4>
                  <p class="text-green-700">Définir et différencier le risque, le rendement, la diversification et l'horizon d'investissement</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle class="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-blue-800">Identifier votre profil d'investisseur</h4>
                  <p class="text-blue-700">Évaluer votre tolérance au risque et définir vos objectifs financiers personnels</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <CheckCircle class="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-purple-800">Découvrir l'écosystème financier marocain</h4>
                  <p class="text-purple-700">Connaître les principaux acteurs, régulateurs et infrastructures du marché</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <CheckCircle class="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-orange-800">Maîtriser le vocabulaire financier</h4>
                  <p class="text-orange-700">Comprendre les termes et expressions couramment utilisés en finance</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 3,
        title: "Risque et Rendement",
        icon: TrendingUp,
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-lg border">
              <h3 class="text-xl font-semibold mb-4">Relation Fondamentale</h3>
              <p class="text-lg">Un potentiel de rendement plus élevé s'accompagne généralement d'un niveau de risque plus important.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-red-600">Le Risque</h4>
                <p>Incertitude quant aux rendements futurs d'un investissement.</p>
                
                <div class="space-y-2">
                  <div class="p-3 bg-red-50 rounded border-l-4 border-red-400">
                    <strong>Risque de marché :</strong> Fluctuations générales du marché
                  </div>
                  <div class="p-3 bg-red-50 rounded border-l-4 border-red-400">
                    <strong>Risque de crédit :</strong> Incapacité de l'émetteur à rembourser
                  </div>
                  <div class="p-3 bg-red-50 rounded border-l-4 border-red-400">
                    <strong>Risque de liquidité :</strong> Difficulté à vendre rapidement
                  </div>
                  <div class="p-3 bg-red-50 rounded border-l-4 border-red-400">
                    <strong>Risque d'inflation :</strong> Perte de pouvoir d'achat
                  </div>
                </div>
              </div>
              
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-green-600">Le Rendement</h4>
                <p>Gain ou perte généré par un investissement sur une période donnée.</p>
                
                <div class="space-y-2">
                  <div class="p-3 bg-green-50 rounded border-l-4 border-green-400">
                    <strong>Plus-values :</strong> Différence entre prix de vente et d'achat
                  </div>
                  <div class="p-3 bg-green-50 rounded border-l-4 border-green-400">
                    <strong>Dividendes :</strong> Part des bénéfices distribuée (actions)
                  </div>
                  <div class="p-3 bg-green-50 rounded border-l-4 border-green-400">
                    <strong>Intérêts :</strong> Revenus réguliers (obligations)
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 4,
        title: "La Diversification",
        icon: PieChart,
        content: `
          <div class="space-y-6">
            <div class="text-center p-6 bg-primary/10 rounded-lg">
              <h3 class="text-2xl font-bold text-primary mb-2">"Ne mettez pas tous vos œufs dans le même panier"</h3>
              <p class="text-lg">Principe fondamental de la diversification</p>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Qu'est-ce que la diversification ?</h4>
              <p>Stratégie qui consiste à répartir ses investissements sur différents types d'actifs, secteurs, zones géographiques ou instruments financiers.</p>
              
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 class="font-semibold text-blue-800 mb-2">Objectif Principal</h5>
                <p class="text-blue-700">Réduire le risque global de votre portefeuille sans sacrifier le rendement potentiel.</p>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-4 border rounded-lg">
                <h5 class="font-semibold mb-2">Types de Diversification</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Par classe d'actifs</li>
                  <li>• Par secteur d'activité</li>
                  <li>• Par zone géographique</li>
                  <li>• Par instrument financier</li>
                </ul>
              </div>
              <div class="p-4 border rounded-lg">
                <h5 class="font-semibold mb-2">Avantages</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Réduction du risque global</li>
                  <li>• Lissage des rendements</li>
                  <li>• Protection contre la volatilité</li>
                  <li>• Optimisation du rapport risque/rendement</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 5,
        title: "L'Écosystème Financier Marocain",
        icon: Shield,
        content: `
          <div class="space-y-6">
            <p class="text-lg">Comprendre l'environnement dans lequel vous allez investir est fondamental.</p>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Acteurs Principaux</h4>
              
              <div class="grid gap-4">
                <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 class="font-semibold text-blue-800">Bourse de Casablanca</h5>
                  <p class="text-blue-700">Principal marché boursier du Maroc où sont cotées les actions et obligations</p>
                </div>
                
                <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 class="font-semibold text-green-800">Banques</h5>
                  <p class="text-green-700">Offrent une gamme de services financiers et produits d'investissement</p>
                </div>
                
                <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h5 class="font-semibold text-purple-800">Sociétés de Bourse</h5>
                  <p class="text-purple-700">Intermédiaires agréés pour l'exécution des ordres d'achat et de vente</p>
                </div>
                
                <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h5 class="font-semibold text-orange-800">Sociétés de Gestion (OPCVM)</h5>
                  <p class="text-orange-700">Gèrent des fonds d'investissement collectifs pour les investisseurs</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Régulateurs</h4>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h5 class="font-semibold text-red-800">AMMC</h5>
                  <p class="text-red-700">Autorité Marocaine du Marché des Capitaux - Régulation et protection des épargnants</p>
                </div>
                
                <div class="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <h5 class="font-semibold text-indigo-800">Bank Al-Maghrib</h5>
                  <p class="text-indigo-700">Banque centrale - Politique monétaire et stabilité financière</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 6,
        title: "Vocabulaire Financier Essentiel",
        icon: BookOpen,
        content: `
          <div class="space-y-6">
            <p class="text-lg">Maîtriser les termes clés vous permettra de comprendre les informations et de prendre des décisions éclairées.</p>
            
            <div class="grid gap-4">
              <div class="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <h5 class="font-semibold text-primary">Action</h5>
                <p class="text-sm">Titre de propriété représentant une part du capital d'une entreprise</p>
              </div>
              
              <div class="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <h5 class="font-semibold text-primary">Obligation</h5>
                <p class="text-sm">Titre de créance émis par une entreprise ou un État, représentant un prêt</p>
              </div>
              
              <div class="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <h5 class="font-semibold text-primary">Dividende</h5>
                <p class="text-sm">Part des bénéfices d'une entreprise distribuée aux actionnaires</p>
              </div>
              
              <div class="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <h5 class="font-semibold text-primary">Plus-value / Moins-value</h5>
                <p class="text-sm">Gain ou perte réalisé lors de la vente d'un actif</p>
              </div>
              
              <div class="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <h5 class="font-semibold text-primary">Portefeuille</h5>
                <p class="text-sm">Ensemble des investissements détenus par un individu ou une entité</p>
              </div>
              
              <div class="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <h5 class="font-semibold text-primary">Volatilité</h5>
                <p class="text-sm">Mesure de l'ampleur des variations de prix d'un actif</p>
              </div>
              
              <div class="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <h5 class="font-semibold text-primary">OPCVM</h5>
                <p class="text-sm">Organisme de Placement Collectif en Valeurs Mobilières - Fonds d'investissement géré par des professionnels</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 7,
        title: "Profils d'Investisseurs",
        icon: Target,
        content: `
          <div class="space-y-6">
            <p class="text-lg">Connaître votre profil d'investisseur est la première étape cruciale avant de placer votre argent.</p>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Facteurs Déterminants</h4>
              
              <div class="grid md:grid-cols-3 gap-4">
                <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 class="font-semibold text-blue-800">Situation Financière</h5>
                  <p class="text-blue-700 text-sm">Revenus, dépenses, épargne d'urgence, dettes</p>
                </div>
                
                <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 class="font-semibold text-green-800">Personnalité</h5>
                  <p class="text-green-700 text-sm">Confort avec l'incertitude et les pertes potentielles</p>
                </div>
                
                <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h5 class="font-semibold text-purple-800">Horizon d'Investissement</h5>
                  <p class="text-purple-700 text-sm">Durée prévue de maintien des investissements</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Les Trois Profils de Risque</h4>
              
              <div class="space-y-3">
                <div class="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <h5 class="font-semibold text-green-800">Prudent</h5>
                  <p class="text-green-700">Privilégie la sécurité du capital, accepte un rendement faible</p>
                </div>
                
                <div class="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <h5 class="font-semibold text-yellow-800">Équilibré</h5>
                  <p class="text-yellow-700">Recherche un équilibre entre sécurité et croissance, accepte un risque modéré</p>
                </div>
                
                <div class="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <h5 class="font-semibold text-red-800">Dynamique/Agressif</h5>
                  <p class="text-red-700">Vise des rendements élevés, accepte un risque important et des fluctuations</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 8,
        title: "Conclusion du Module",
        icon: CheckCircle,
        content: `
          <div class="space-y-6">
            <div class="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
              <h3 class="text-2xl font-bold text-primary mb-2">Félicitations !</h3>
              <p class="text-lg">Vous avez terminé le premier module sur les Fondamentaux de l'Investissement</p>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Ce que vous avez appris :</h4>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <CheckCircle class="h-6 w-6 text-blue-600 mb-2" />
                  <h5 class="font-semibold text-blue-800">Concepts Clés</h5>
                  <p class="text-blue-700 text-sm">Risque, rendement, diversification, horizon d'investissement</p>
                </div>
                
                <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle class="h-6 w-6 text-green-600 mb-2" />
                  <h5 class="font-semibold text-green-800">Profil d'Investisseur</h5>
                  <p class="text-green-700 text-sm">Identification de votre tolérance au risque et objectifs</p>
                </div>
                
                <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <CheckCircle class="h-6 w-6 text-purple-600 mb-2" />
                  <h5 class="font-semibold text-purple-800">Écosystème Marocain</h5>
                  <p class="text-purple-700 text-sm">Acteurs, régulateurs et infrastructures du marché</p>
                </div>
                
                <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <CheckCircle class="h-6 w-6 text-orange-600 mb-2" />
                  <h5 class="font-semibold text-orange-800">Vocabulaire Financier</h5>
                  <p class="text-orange-700 text-sm">Termes essentiels pour comprendre la finance</p>
                </div>
              </div>
            </div>
            
            <div class="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
              <h4 class="font-semibold text-primary mb-2">Prochaine Étape</h4>
              <p>Vous êtes maintenant prêt à passer au Module 2 pour découvrir les instruments d'investissement disponibles sur le marché marocain !</p>
            </div>
          </div>
        `
      }
    ]
  },
  2: {
    title: "Les Instruments d'Investissement au Maroc",
    description: "Explorez les actions, obligations, OPCVM et Sukuk avec des données chiffrées récentes",
    sections: [
      {
        id: 1,
        title: "Introduction aux Instruments",
        icon: BookOpen,
        content: `
          <div class="space-y-6">
            <p class="text-lg leading-relaxed">
              Bienvenue dans le Module 2 de votre parcours d'apprentissage avec Igodar Digital. 
              Ce module est essentiel pour comprendre les différents véhicules d'investissement disponibles 
              sur le marché financier marocain.
            </p>
            
            <div class="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
              <h3 class="font-semibold text-primary mb-2">Importance de ce Module</h3>
              <p>Connaître les caractéristiques, avantages et risques de chaque instrument est crucial 
              pour construire un portefeuille diversifié et adapté à vos objectifs.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 class="font-semibold text-blue-800 mb-2">Instruments Couverts</h4>
                <ul class="text-blue-700 text-sm space-y-1">
                  <li>• Actions</li>
                  <li>• Obligations</li>
                  <li>• OPCVM</li>
                  <li>• Sukuk</li>
                </ul>
              </div>
              <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 class="font-semibold text-green-800 mb-2">Contexte</h4>
                <p class="text-green-700 text-sm">Fonctionnement dans le contexte réglementaire et économique du Maroc</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 2,
        title: "Les Actions",
        icon: TrendingUp,
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border">
              <h3 class="text-xl font-semibold mb-2">Qu'est-ce qu'une Action ?</h3>
              <p class="text-lg">Titre de propriété qui représente une fraction du capital d'une entreprise.</p>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Droits de l'Actionnaire</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 class="font-semibold text-blue-800">Droit de Vote</h5>
                  <p class="text-blue-700 text-sm">Participation aux assemblées générales</p>
                </div>
                <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 class="font-semibold text-green-800">Droit aux Dividendes</h5>
                  <p class="text-green-700 text-sm">Part des bénéfices distribuée</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Chiffres Clés du Marché Marocain</h4>
              <div class="grid gap-4">
                <div class="p-4 bg-primary/10 rounded-lg border">
                  <h5 class="font-semibold text-primary">Capitalisation Boursière</h5>
                  <p class="text-2xl font-bold text-primary">561,1 milliards MAD</p>
                  <p class="text-sm text-muted-foreground">Fin 2022 - Bourse de Casablanca</p>
                </div>
                
                <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 class="font-semibold text-green-800">Profits des Entreprises Cotées</h5>
                  <p class="text-2xl font-bold text-green-800">33 milliards MAD</p>
                  <p class="text-sm text-green-600">En 2023 - Témoignant de la bonne santé du secteur privé</p>
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-3">
                <h5 class="font-semibold text-green-600">Avantages</h5>
                <div class="space-y-2">
                  <div class="p-3 bg-green-50 rounded border-l-4 border-green-400">
                    <strong>Potentiel de rendement élevé</strong>
                    <p class="text-sm">Plus-values significatives et dividendes</p>
                  </div>
                  <div class="p-3 bg-green-50 rounded border-l-4 border-green-400">
                    <strong>Participation à la croissance</strong>
                    <p class="text-sm">Bénéfice direct du succès des entreprises</p>
                  </div>
                </div>
              </div>
              
              <div class="space-y-3">
                <h5 class="font-semibold text-red-600">Risques</h5>
                <div class="space-y-2">
                  <div class="p-3 bg-red-50 rounded border-l-4 border-red-400">
                    <strong>Volatilité</strong>
                    <p class="text-sm">Fluctuations importantes des prix</p>
                  </div>
                  <div class="p-3 bg-red-50 rounded border-l-4 border-red-400">
                    <strong>Risque d'entreprise</strong>
                    <p class="text-sm">Lié à la santé financière de l'entreprise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 3,
        title: "Les Obligations",
        icon: Shield,
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
              <h3 class="text-xl font-semibold mb-2">Qu'est-ce qu'une Obligation ?</h3>
              <p class="text-lg">Titre de créance représentant un prêt accordé à une entité en échange d'intérêts réguliers.</p>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Types d'Émetteurs au Maroc</h4>
              <div class="grid gap-4">
                <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 class="font-semibold text-blue-800">Trésor Public</h5>
                  <p class="text-blue-700 text-sm">Bons du Trésor - Considérés comme très sûrs, garantis par l'État</p>
                </div>
                <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 class="font-semibold text-green-800">Entreprises</h5>
                  <p class="text-green-700 text-sm">Obligations d'entreprises pour financer leur développement</p>
                </div>
                <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h5 class="font-semibold text-purple-800">Collectivités Locales</h5>
                  <p class="text-purple-700 text-sm">Financement de projets locaux et d'infrastructure</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Chiffres Clés du Marché Obligataire</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 bg-primary/10 rounded-lg border">
                  <h5 class="font-semibold text-primary">Levée du Trésor</h5>
                  <p class="text-2xl font-bold text-primary">7+ milliards MAD</p>
                  <p class="text-sm text-muted-foreground">Janvier 2025 - Marché des adjudications</p>
                </div>
                
                <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 class="font-semibold text-blue-800">Tendance des Taux</h5>
                  <p class="text-blue-700">Détente observée en 2024-2025</p>
                  <p class="text-sm text-blue-600">Obligations existantes plus attractives</p>
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-3">
                <h5 class="font-semibold text-green-600">Avantages</h5>
                <div class="space-y-2">
                  <div class="p-3 bg-green-50 rounded border-l-4 border-green-400">
                    <strong>Sécurité</strong>
                    <p class="text-sm">Moins volatiles que les actions</p>
                  </div>
                  <div class="p-3 bg-green-50 rounded border-l-4 border-green-400">
                    <strong>Revenus réguliers</strong>
                    <p class="text-sm">Coupons à intervalles fixes</p>
                  </div>
                </div>
              </div>
              
              <div class="space-y-3">
                <h5 class="font-semibold text-red-600">Risques</h5>
                <div class="space-y-2">
                  <div class="p-3 bg-red-50 rounded border-l-4 border-red-400">
                    <strong>Risque de taux</strong>
                    <p class="text-sm">Valeur inverse aux taux d'intérêt</p>
                  </div>
                  <div class="p-3 bg-red-50 rounded border-l-4 border-red-400">
                    <strong>Risque de crédit</strong>
                    <p class="text-sm">Défaut possible de l'émetteur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      }
      // Continuer avec les autres sections...
    ]
  }
  // Continuer avec les modules 3 et 4...
}

export default function ModuleContent({ moduleId, sectionId, onSectionComplete, onNavigate }) {
  const module = moduleContents[moduleId]
  const section = module?.sections.find(s => s.id === sectionId)
  
  if (!module || !section) {
    return <div>Contenu non trouvé</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <section.icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{section.title}</h2>
          <p className="text-muted-foreground">Module {moduleId} - Section {sectionId}</p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={() => onNavigate('prev')}
          disabled={sectionId === 1}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Précédent
        </Button>
        
        <div className="flex gap-2">
          <Button
            onClick={() => onSectionComplete(sectionId)}
            variant="default"
          >
            Marquer comme terminé
            <CheckCircle className="ml-2 h-4 w-4" />
          </Button>
          
          <Button
            onClick={() => onNavigate('next')}
            disabled={sectionId === module.sections.length}
          >
            Suivant
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

