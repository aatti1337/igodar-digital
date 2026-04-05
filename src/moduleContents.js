// Contenu éducatif complet des 4 modules - Igodar Digital
// Chaque section contient le contenu pédagogique détaillé

const moduleContents = {
  1: {
    1: {
      title: "Introduction au Module",
      content: [
        {
          type: "intro",
          text: "Bienvenue dans le premier module de votre parcours d'apprentissage avec Igodar Digital ! Ce module est conçu pour vous fournir les bases solides nécessaires pour naviguer avec confiance dans le monde de l'investissement financier, spécifiquement adapté au contexte du marché marocain."
        },
        {
          type: "highlight",
          title: "Objectif Principal",
          text: "Démystifier l'investissement et vous aider à comprendre pourquoi et comment il peut être un outil puissant pour atteindre vos objectifs financiers."
        },
        {
          type: "grid",
          items: [
            { title: "Pour qui ?", text: "Débutants complets ou personnes souhaitant rafraîchir leurs connaissances sur les fondamentaux." },
            { title: "Contexte", text: "Spécifiquement adapté au marché financier marocain avec des exemples locaux." }
          ]
        },
        {
          type: "paragraph",
          text: "L'investissement peut sembler intimidant au premier abord, mais avec les bonnes bases, il devient un outil accessible à tous. Au Maroc, le marché financier offre de nombreuses opportunités pour faire fructifier votre épargne, que vous soyez salarié, entrepreneur ou retraité."
        }
      ]
    },
    2: {
      title: "Objectifs d'Apprentissage",
      content: [
        {
          type: "paragraph",
          text: "À la fin de ce module, vous serez capable de maîtriser les concepts fondamentaux de l'investissement et de les appliquer dans le contexte marocain."
        },
        {
          type: "objectives",
          items: [
            { title: "Comprendre les concepts de base", text: "Définir et différencier le risque, le rendement, la diversification et l'horizon d'investissement.", color: "green" },
            { title: "Identifier votre profil d'investisseur", text: "Évaluer votre tolérance au risque et définir vos objectifs financiers personnels.", color: "blue" },
            { title: "Découvrir l'écosystème financier marocain", text: "Connaître les principaux acteurs, régulateurs et infrastructures du marché.", color: "purple" },
            { title: "Maîtriser le vocabulaire financier", text: "Comprendre les termes et expressions couramment utilisés en finance.", color: "orange" }
          ]
        },
        {
          type: "tip",
          text: "Prenez des notes au fur et à mesure ! Les concepts de ce module seront réutilisés dans tous les modules suivants."
        }
      ]
    },
    3: {
      title: "Risque et Rendement",
      content: [
        {
          type: "highlight",
          title: "Relation Fondamentale",
          text: "Un potentiel de rendement plus élevé s'accompagne généralement d'un niveau de risque plus important. C'est la règle d'or de l'investissement."
        },
        {
          type: "two_columns",
          left: {
            title: "Le Risque",
            color: "red",
            text: "Incertitude quant aux rendements futurs d'un investissement. Il peut prendre plusieurs formes :",
            items: [
              "Risque de marché : fluctuations générales dues à la conjoncture économique",
              "Risque de crédit : l'émetteur ne peut pas rembourser sa dette",
              "Risque de liquidité : difficulté à vendre rapidement un actif",
              "Risque d'inflation : perte de pouvoir d'achat de votre argent"
            ]
          },
          right: {
            title: "Le Rendement",
            color: "green",
            text: "Gain ou perte généré par un investissement sur une période donnée. Il se compose de :",
            items: [
              "Plus-values : différence entre le prix de vente et le prix d'achat",
              "Dividendes : part des bénéfices distribuée aux actionnaires",
              "Intérêts : revenus réguliers versés par les obligations",
              "Rendement total : combinaison de tous ces éléments"
            ]
          }
        },
        {
          type: "example",
          title: "Exemple concret au Maroc",
          text: "En 2023, un livret d'épargne classique au Maroc offrait environ 2-3% de rendement annuel (risque très faible), tandis que certaines actions cotées à la Bourse de Casablanca ont réalisé des performances de +15% à +30% (risque plus élevé). L'indice MASI a progressé de 12,8% en 2023."
        },
        {
          type: "paragraph",
          text: "La clé est de trouver l'équilibre entre le rendement souhaité et le niveau de risque que vous êtes prêt à accepter. Cet équilibre dépend de votre situation personnelle, votre âge, vos revenus et vos objectifs."
        }
      ]
    },
    4: {
      title: "La Diversification",
      content: [
        {
          type: "quote",
          text: "Ne mettez pas tous vos œufs dans le même panier",
          subtitle: "Principe fondamental de la diversification"
        },
        {
          type: "paragraph",
          text: "La diversification est une stratégie qui consiste à répartir ses investissements sur différents types d'actifs, secteurs, zones géographiques ou instruments financiers. L'objectif est de réduire le risque global de votre portefeuille sans sacrifier le rendement potentiel."
        },
        {
          type: "grid",
          items: [
            { title: "Par classe d'actifs", text: "Actions, obligations, immobilier, matières premières. Chaque classe réagit différemment aux conditions économiques." },
            { title: "Par secteur d'activité", text: "Banques, télécoms, industrie, agroalimentaire. Un secteur en difficulté n'affectera pas tout votre portefeuille." },
            { title: "Par zone géographique", text: "Maroc, Afrique du Nord, marchés internationaux. Réduit l'impact des crises locales." },
            { title: "Par horizon temporel", text: "Court, moyen et long terme. Adaptez vos placements à vos échéances." }
          ]
        },
        {
          type: "example",
          title: "Application pratique",
          text: "Plutôt que d'investir 100 000 MAD dans une seule action, un portefeuille diversifié pourrait comprendre : 40% en actions de la Bourse de Casablanca (répartis sur 5-6 secteurs), 30% en obligations du Trésor, 20% en OPCVM diversifiés, et 10% en épargne disponible."
        }
      ]
    },
    5: {
      title: "L'Écosystème Financier Marocain",
      content: [
        {
          type: "paragraph",
          text: "Comprendre l'environnement dans lequel vous allez investir est fondamental. Le Maroc dispose d'un écosystème financier structuré et en pleine modernisation."
        },
        {
          type: "cards",
          title: "Acteurs Principaux",
          items: [
            { title: "Bourse de Casablanca", text: "Fondée en 1929, c'est le principal marché boursier du Maroc. Elle accueille plus de 75 sociétés cotées représentant une capitalisation de plus de 600 milliards MAD. Les indices principaux sont le MASI (toutes les valeurs) et le MSI 20 (20 plus grandes).", color: "blue" },
            { title: "Banques et établissements financiers", text: "Attijariwafa Bank, BCP, BMCE Bank of Africa, CIH... Elles offrent des comptes titres, des plans d'épargne et facilitent l'accès aux marchés financiers pour les particuliers.", color: "green" },
            { title: "Sociétés de Bourse", text: "Intermédiaires agréés et obligatoires pour l'exécution des ordres d'achat et de vente en bourse. Exemples : Attijari Intermédiation, BMCE Capital Bourse, CDG Capital Bourse.", color: "purple" },
            { title: "Sociétés de Gestion d'OPCVM", text: "Plus de 20 sociétés de gestion gèrent des fonds d'investissement collectifs (OPCVM) avec un actif global dépassant 580 milliards MAD. Elles offrent une gestion professionnelle accessible à partir de montants modestes.", color: "orange" }
          ]
        },
        {
          type: "cards",
          title: "Régulateurs",
          items: [
            { title: "AMMC", text: "L'Autorité Marocaine du Marché des Capitaux veille à la protection de l'épargne, au bon fonctionnement des marchés et à l'information des investisseurs. Elle agrée les intermédiaires et contrôle les opérations financières.", color: "red" },
            { title: "Bank Al-Maghrib", text: "La Banque centrale du Maroc définit la politique monétaire, supervise le système bancaire et assure la stabilité financière. Son taux directeur influence tous les taux du marché.", color: "indigo" }
          ]
        },
        {
          type: "tip",
          text: "Avant d'investir, vérifiez toujours que votre intermédiaire est agréé par l'AMMC. La liste des intermédiaires agréés est disponible sur le site officiel de l'AMMC."
        }
      ]
    },
    6: {
      title: "Vocabulaire Financier Essentiel",
      content: [
        {
          type: "paragraph",
          text: "Maîtriser les termes clés vous permettra de comprendre les informations financières et de prendre des décisions éclairées. Voici les concepts essentiels à connaître :"
        },
        {
          type: "definitions",
          items: [
            { term: "Action", definition: "Titre de propriété représentant une part du capital d'une entreprise. En achetant une action, vous devenez copropriétaire de l'entreprise et bénéficiez de droits (vote, dividendes)." },
            { term: "Obligation", definition: "Titre de créance émis par une entreprise ou un État. Vous prêtez de l'argent en échange d'intérêts réguliers (coupons) et du remboursement à l'échéance." },
            { term: "Dividende", definition: "Part des bénéfices d'une entreprise distribuée aux actionnaires, généralement une fois par an. Au Maroc, le rendement en dividendes moyen est d'environ 3-4%." },
            { term: "Plus-value / Moins-value", definition: "Gain ou perte réalisé lors de la vente d'un actif par rapport à son prix d'achat. Exemple : acheter une action à 200 MAD et la revendre à 250 MAD = plus-value de 50 MAD." },
            { term: "Portefeuille", definition: "Ensemble des investissements détenus par un individu ou une entité. Un bon portefeuille est diversifié et adapté à votre profil de risque." },
            { term: "Volatilité", definition: "Mesure de l'ampleur des variations de prix d'un actif. Plus un actif est volatile, plus son prix fluctue fortement (risque élevé, mais aussi potentiel de gain élevé)." },
            { term: "OPCVM", definition: "Organisme de Placement Collectif en Valeurs Mobilières. Fonds d'investissement géré par des professionnels qui mutualise l'épargne de nombreux investisseurs." },
            { term: "Liquidité", definition: "Capacité à acheter ou vendre un actif rapidement sans impact significatif sur son prix. Les actions des grandes entreprises cotées sont généralement très liquides." },
            { term: "Capitalisation boursière", definition: "Valeur totale d'une entreprise en bourse = prix de l'action × nombre total d'actions. Marjane, IAM, ou Attijariwafa Bank figurent parmi les plus grandes capitalisations au Maroc." }
          ]
        }
      ]
    },
    7: {
      title: "Profils d'Investisseurs",
      content: [
        {
          type: "paragraph",
          text: "Connaître votre profil d'investisseur est la première étape cruciale avant de placer votre argent. Votre profil dépend de trois facteurs principaux."
        },
        {
          type: "grid",
          items: [
            { title: "Situation Financière", text: "Revenus mensuels, dépenses fixes, épargne de précaution (3 à 6 mois de salaire), dettes en cours. N'investissez que l'argent dont vous n'avez pas besoin à court terme." },
            { title: "Tolérance au Risque", text: "Votre confort psychologique face à l'incertitude. Pouvez-vous supporter de voir votre investissement baisser de 20% sans paniquer ?" },
            { title: "Horizon d'Investissement", text: "La durée pendant laquelle vous pouvez laisser votre argent investi. Plus l'horizon est long, plus vous pouvez prendre de risques." }
          ]
        },
        {
          type: "profiles",
          items: [
            {
              title: "Prudent / Conservateur",
              color: "green",
              description: "Privilégie la sécurité du capital. Accepte un rendement faible en échange d'une grande stabilité.",
              allocation: "70% Obligations / 20% OPCVM monétaires / 10% Actions",
              rendement: "3-5% par an",
              ideal: "Épargnants proches de la retraite ou avec un horizon court (< 3 ans)"
            },
            {
              title: "Équilibré / Modéré",
              color: "yellow",
              description: "Recherche un équilibre entre sécurité et croissance. Accepte des fluctuations modérées.",
              allocation: "40% Obligations / 40% Actions / 20% OPCVM diversifiés",
              rendement: "5-8% par an",
              ideal: "Investisseurs avec un horizon de 3 à 7 ans et des revenus stables"
            },
            {
              title: "Dynamique / Agressif",
              color: "red",
              description: "Vise des rendements élevés. Accepte un risque important et des fluctuations marquées.",
              allocation: "70% Actions / 20% OPCVM actions / 10% Obligations",
              rendement: "8-15% par an (variable)",
              ideal: "Jeunes investisseurs avec un horizon long (> 7 ans) et des revenus croissants"
            }
          ]
        },
        {
          type: "tip",
          text: "Votre profil peut évoluer avec le temps. Il est recommandé de le réévaluer tous les 2-3 ans ou lors de changements importants dans votre vie (mariage, achat immobilier, naissance, etc.)."
        }
      ]
    },
    8: {
      title: "Quiz Final du Module",
      content: [
        {
          type: "quiz",
          questions: [
            {
              question: "Quelle est la relation entre risque et rendement ?",
              options: ["Plus de risque = moins de rendement", "Plus de risque = plus de rendement potentiel", "Le risque n'a aucun lien avec le rendement", "Le rendement est garanti si on prend du risque"],
              correct: 1,
              explanation: "C'est la règle fondamentale : un rendement potentiel plus élevé s'accompagne d'un risque plus important. Mais attention, le rendement n'est jamais garanti !"
            },
            {
              question: "Qu'est-ce que la diversification ?",
              options: ["Investir tout dans le meilleur placement", "Répartir ses investissements sur différents actifs", "Changer de placement chaque mois", "N'investir que dans les obligations"],
              correct: 1,
              explanation: "La diversification consiste à ne pas mettre tous ses œufs dans le même panier pour réduire le risque global."
            },
            {
              question: "Quel est le rôle de l'AMMC au Maroc ?",
              options: ["Gérer la Bourse de Casablanca", "Fixer les prix des actions", "Réguler et protéger les investisseurs sur les marchés des capitaux", "Distribuer les dividendes"],
              correct: 2,
              explanation: "L'AMMC (Autorité Marocaine du Marché des Capitaux) régule les marchés financiers et protège les épargnants."
            },
            {
              question: "Qu'est-ce qu'un OPCVM ?",
              options: ["Un type d'action", "Un organisme de placement collectif géré par des professionnels", "Une obligation du Trésor", "Un compte bancaire spécial"],
              correct: 1,
              explanation: "Un OPCVM est un fonds d'investissement collectif qui permet de mutualiser l'épargne de nombreux investisseurs sous gestion professionnelle."
            },
            {
              question: "Quel profil d'investisseur devrait privilégier les obligations ?",
              options: ["Dynamique", "Équilibré", "Prudent", "Tous les profils de la même manière"],
              correct: 2,
              explanation: "Le profil prudent privilégie la sécurité et les revenus réguliers, ce qui correspond bien aux caractéristiques des obligations."
            }
          ]
        }
      ]
    }
  },

  2: {
    1: {
      title: "Introduction aux Instruments",
      content: [
        {
          type: "intro",
          text: "Bienvenue dans le Module 2 ! Après avoir compris les fondamentaux, il est temps de découvrir les instruments d'investissement disponibles sur le marché marocain. Chaque instrument a ses propres caractéristiques, avantages et risques."
        },
        {
          type: "highlight",
          title: "Pourquoi ce module est essentiel",
          text: "Connaître les caractéristiques de chaque instrument est crucial pour construire un portefeuille diversifié et adapté à vos objectifs financiers."
        },
        {
          type: "grid",
          items: [
            { title: "Actions", text: "Parts de propriété dans des entreprises cotées à la Bourse de Casablanca." },
            { title: "Obligations", text: "Titres de créance émis par l'État ou des entreprises avec des coupons réguliers." },
            { title: "OPCVM", text: "Fonds d'investissement collectifs gérés par des professionnels." },
            { title: "Sukuk", text: "Instruments financiers conformes à la finance islamique." }
          ]
        }
      ]
    },
    2: {
      title: "Les Actions - Bourse de Casablanca",
      content: [
        {
          type: "highlight",
          title: "Qu'est-ce qu'une Action ?",
          text: "Titre de propriété qui représente une fraction du capital d'une entreprise. En achetant une action, vous devenez actionnaire et copropriétaire."
        },
        {
          type: "two_columns",
          left: {
            title: "Droits de l'Actionnaire",
            color: "blue",
            text: "En tant qu'actionnaire, vous bénéficiez de :",
            items: [
              "Droit de vote aux assemblées générales",
              "Droit aux dividendes (part des bénéfices)",
              "Droit à l'information sur la société",
              "Droit de céder librement vos actions"
            ]
          },
          right: {
            title: "Chiffres Clés (2024)",
            color: "green",
            text: "Le marché actions marocain en quelques chiffres :",
            items: [
              "Capitalisation boursière : +700 milliards MAD",
              "Plus de 75 sociétés cotées",
              "Secteurs : banques, télécoms, BTP, agro, mines",
              "Indice MASI : performance de +12,8% en 2023"
            ]
          }
        },
        {
          type: "example",
          title: "Comment acheter des actions au Maroc ?",
          text: "1) Ouvrir un compte titres auprès d'une banque ou société de bourse agréée. 2) Alimenter votre compte. 3) Passer vos ordres d'achat via votre intermédiaire (en ligne ou par téléphone). 4) Les frais incluent les commissions de courtage (0,1% à 0,6%) et la TVA."
        },
        {
          type: "tip",
          text: "Commencez par les grandes capitalisations (Attijariwafa Bank, Maroc Telecom, LafargeHolcim Maroc) qui sont plus stables et plus liquides que les petites valeurs."
        }
      ]
    },
    3: {
      title: "Les Obligations du Trésor",
      content: [
        {
          type: "highlight",
          title: "Qu'est-ce qu'une Obligation ?",
          text: "Un titre de créance représentant un prêt accordé à une entité (État, entreprise) en échange d'intérêts réguliers appelés coupons."
        },
        {
          type: "cards",
          title: "Types d'Obligations au Maroc",
          items: [
            { title: "Bons du Trésor", text: "Émis par l'État marocain, ils sont considérés comme les placements les plus sûrs. Disponibles sur des maturités de 13 semaines à 30 ans. Levée mensuelle de plusieurs milliards MAD.", color: "blue" },
            { title: "Obligations d'entreprises", text: "Émises par des sociétés pour financer leur développement. Rendement plus élevé que les bons du Trésor mais risque de crédit plus important.", color: "green" },
            { title: "Obligations subordonnées", text: "Émises principalement par les banques, elles offrent un rendement supérieur en contrepartie d'un risque plus élevé en cas de défaut.", color: "purple" }
          ]
        },
        {
          type: "paragraph",
          text: "Au Maroc, le marché obligataire est le plus important en volume. Les taux ont connu une détente en 2024-2025 après la hausse de 2022-2023, rendant les obligations existantes plus attractives. Le Trésor lève régulièrement plus de 7 milliards MAD par mois."
        },
        {
          type: "two_columns",
          left: {
            title: "Avantages",
            color: "green",
            text: "",
            items: ["Revenus réguliers et prévisibles (coupons)", "Moins volatiles que les actions", "Capital remboursé à l'échéance", "Bons du Trésor = risque quasi nul"]
          },
          right: {
            title: "Risques",
            color: "red",
            text: "",
            items: ["Risque de taux : la valeur baisse quand les taux montent", "Risque de crédit (pour les entreprises)", "Rendement limité par rapport aux actions", "Risque d'inflation qui érode le rendement réel"]
          }
        }
      ]
    },
    4: {
      title: "Les OPCVM au Maroc",
      content: [
        {
          type: "intro",
          text: "Les OPCVM (Organismes de Placement Collectif en Valeurs Mobilières) sont l'un des moyens les plus populaires d'investir au Maroc. Avec plus de 580 milliards MAD d'actifs sous gestion, ils représentent un pilier du marché financier marocain."
        },
        {
          type: "cards",
          title: "Catégories d'OPCVM",
          items: [
            { title: "OPCVM Monétaires", text: "Investis en placements à très court terme. Rendement faible (2-3%) mais risque quasi nul. Idéal pour placer votre trésorerie à court terme.", color: "blue" },
            { title: "OPCVM Obligataires", text: "Investis principalement en obligations. Rendement modéré (4-6%) avec un risque faible à modéré. Court terme, moyen terme ou long terme.", color: "green" },
            { title: "OPCVM Actions", text: "Investis en actions cotées en bourse. Rendement potentiellement élevé (8-15%) mais volatilité importante. Pour les horizons longs.", color: "purple" },
            { title: "OPCVM Diversifiés", text: "Mix d'actions et d'obligations. Bon compromis entre rendement et risque. Allocation flexible selon les conditions de marché.", color: "orange" }
          ]
        },
        {
          type: "example",
          title: "Comment investir en OPCVM ?",
          text: "1) Choisir une société de gestion agréée (Wafa Gestion, BMCE Capital Gestion, CDG Capital Gestion...). 2) Sélectionner le fonds adapté à votre profil. 3) Souscrire avec un montant minimum (souvent 100 MAD seulement). 4) Vous pouvez racheter vos parts à tout moment (liquidité quotidienne)."
        },
        {
          type: "tip",
          text: "Les OPCVM sont parfaits pour les débutants : gestion professionnelle, diversification automatique et montant d'entrée accessible. Comparez les performances passées et les frais de gestion avant de choisir."
        }
      ]
    },
    5: {
      title: "Les Sukuk - Finance Islamique",
      content: [
        {
          type: "highlight",
          title: "Qu'est-ce qu'un Sukuk ?",
          text: "Les Sukuk sont des certificats d'investissement conformes à la charia islamique. Contrairement aux obligations classiques, ils ne versent pas d'intérêts mais partagent les profits générés par un actif sous-jacent."
        },
        {
          type: "paragraph",
          text: "Le Maroc a adopté le cadre légal des Sukuk en 2018. L'État marocain a réalisé plusieurs émissions souveraines de Sukuk, pour un montant cumulé de plusieurs milliards de MAD. Ce marché est en pleine croissance et offre une alternative éthique aux instruments traditionnels."
        },
        {
          type: "cards",
          title: "Types de Sukuk",
          items: [
            { title: "Sukuk Ijara", text: "Basés sur un contrat de location. L'investisseur détient une part d'un actif qui est loué, et perçoit les loyers.", color: "green" },
            { title: "Sukuk Mourabaha", text: "Basés sur un contrat d'achat-revente avec marge. Le profit remplace l'intérêt.", color: "blue" },
            { title: "Sukuk Moucharaka", text: "Basés sur un partenariat. Les profits et pertes sont partagés entre les parties selon un ratio convenu.", color: "purple" }
          ]
        },
        {
          type: "two_columns",
          left: {
            title: "Avantages",
            color: "green",
            text: "",
            items: ["Conformité avec les principes de la finance islamique", "Adossés à des actifs réels (tangibles)", "Rendements compétitifs avec les obligations classiques", "Marché en croissance au Maroc"]
          },
          right: {
            title: "Points d'attention",
            color: "orange",
            text: "",
            items: ["Marché encore jeune au Maroc", "Liquidité limitée par rapport aux obligations classiques", "Complexité des structures juridiques", "Offre encore restreinte pour les particuliers"]
          }
        }
      ]
    },
    6: {
      title: "Comparaison des Instruments",
      content: [
        {
          type: "paragraph",
          text: "Chaque instrument a ses forces et faiblesses. Le tableau suivant vous aide à choisir selon votre profil et vos objectifs :"
        },
        {
          type: "comparison",
          headers: ["Critère", "Actions", "Obligations", "OPCVM", "Sukuk"],
          rows: [
            ["Rendement potentiel", "Élevé (8-15%+)", "Modéré (3-6%)", "Variable (2-15%)", "Modéré (3-6%)"],
            ["Risque", "Élevé", "Faible à modéré", "Variable", "Faible à modéré"],
            ["Liquidité", "Bonne", "Moyenne", "Très bonne", "Faible"],
            ["Montant minimum", "Prix d'une action", "Souvent élevé", "Dès 100 MAD", "Variable"],
            ["Gestion requise", "Active", "Passive", "Déléguée", "Passive"],
            ["Horizon idéal", "> 5 ans", "1-10 ans", "Variable", "2-10 ans"]
          ]
        },
        {
          type: "tip",
          text: "Il n'y a pas de 'meilleur' instrument. Le choix optimal dépend de votre profil de risque, votre horizon d'investissement et vos objectifs financiers. La clé est la diversification !"
        }
      ]
    },
    7: {
      title: "Données de Performance 2024",
      content: [
        {
          type: "intro",
          text: "Analysons les performances récentes du marché marocain pour mieux comprendre le comportement de chaque classe d'actifs."
        },
        {
          type: "stats",
          items: [
            { label: "MASI (indice global)", value: "+12,8%", detail: "Performance annuelle 2023" },
            { label: "Capitalisation boursière", value: "+700 Mds MAD", detail: "Fin 2024" },
            { label: "OPCVM - Actifs sous gestion", value: "580+ Mds MAD", detail: "Record historique" },
            { label: "Taux du Trésor 5 ans", value: "~3,5%", detail: "En baisse vs 2023" }
          ]
        },
        {
          type: "paragraph",
          text: "L'année 2024 a été marquée par un regain d'optimisme sur le marché marocain, porté par la baisse des taux d'intérêt, les bons résultats des entreprises cotées et les perspectives économiques positives liées aux investissements massifs dans les infrastructures (Coupe du Monde 2030)."
        },
        {
          type: "cards",
          title: "Secteurs phares",
          items: [
            { title: "Banques", text: "Résultats records portés par la croissance du crédit et l'expansion africaine. Attijariwafa Bank et BCP en tête.", color: "blue" },
            { title: "Immobilier & BTP", text: "Dynamisme lié aux projets d'infrastructure et aux programmes de logement social.", color: "green" },
            { title: "Agroalimentaire", text: "Secteur résilient avec des marques fortes (Centrale Danone, Cosumar, Lesieur Cristal).", color: "orange" }
          ]
        }
      ]
    },
    8: {
      title: "Stratégies de Sélection",
      content: [
        {
          type: "intro",
          text: "Comment choisir les bons instruments pour votre portefeuille ? Voici les stratégies clés à appliquer."
        },
        {
          type: "cards",
          title: "Étapes de sélection",
          items: [
            { title: "1. Définissez vos objectifs", text: "Épargne retraite ? Achat immobilier dans 5 ans ? Revenus complémentaires ? Chaque objectif dicte une stratégie différente.", color: "blue" },
            { title: "2. Évaluez votre horizon", text: "Court terme (< 2 ans) = obligations/monétaire. Moyen terme (2-7 ans) = mix. Long terme (> 7 ans) = dominante actions.", color: "green" },
            { title: "3. Diversifiez intelligemment", text: "Ne mettez pas plus de 10% sur une seule valeur. Répartissez sur au moins 3 classes d'actifs et 5 secteurs différents.", color: "purple" },
            { title: "4. Maîtrisez les frais", text: "Comparez les frais de courtage, de gestion et les droits de garde. Sur 20 ans, 1% de frais en plus peut réduire votre capital final de 20%.", color: "orange" }
          ]
        },
        {
          type: "example",
          title: "Exemple de portefeuille pour un profil équilibré",
          text: "Objectif : préparer sa retraite dans 15 ans. Allocation : 35% OPCVM Actions Maroc, 25% OPCVM Obligataire MT, 15% Actions directes (grandes caps), 15% Bons du Trésor, 10% OPCVM Diversifié. Rééquilibrage annuel pour maintenir les proportions."
        }
      ]
    },
    9: {
      title: "Cas Pratiques",
      content: [
        {
          type: "intro",
          text: "Mettons en pratique ce que nous avons appris avec trois profils d'investisseurs marocains."
        },
        {
          type: "case_study",
          cases: [
            {
              name: "Youssef, 28 ans - Ingénieur",
              situation: "Salaire : 15 000 MAD/mois. Épargne disponible : 80 000 MAD. Objectif : faire fructifier son épargne sur le long terme.",
              recommendation: "Profil dynamique avec horizon long. Allocation suggérée : 50% OPCVM Actions, 20% actions directes (banques, télécoms), 20% OPCVM Obligataire, 10% épargne de précaution.",
              color: "blue"
            },
            {
              name: "Fatima, 45 ans - Commerçante",
              situation: "Revenus variables : 20 000-30 000 MAD/mois. Épargne : 300 000 MAD. Objectif : préparer la retraite et sécuriser le capital.",
              recommendation: "Profil équilibré. Allocation : 30% Bons du Trésor, 30% OPCVM Obligataire, 25% OPCVM Diversifié, 15% OPCVM Actions.",
              color: "green"
            },
            {
              name: "Ahmed, 60 ans - Retraité",
              situation: "Pension : 8 000 MAD/mois. Épargne : 500 000 MAD. Objectif : compléter sa pension avec des revenus réguliers.",
              recommendation: "Profil prudent. Allocation : 50% Bons du Trésor, 30% OPCVM Monétaire, 15% OPCVM Obligataire CT, 5% actions à haut dividende.",
              color: "purple"
            }
          ]
        }
      ]
    },
    10: {
      title: "Évaluation Module 2",
      content: [
        {
          type: "quiz",
          questions: [
            {
              question: "Quelle est la différence principale entre une action et une obligation ?",
              options: ["L'action est plus chère", "L'action représente une propriété, l'obligation un prêt", "L'obligation rapporte toujours plus", "Il n'y a pas de différence"],
              correct: 1,
              explanation: "L'action vous rend copropriétaire de l'entreprise, tandis que l'obligation représente un prêt que vous accordez."
            },
            {
              question: "Quel type d'OPCVM est le moins risqué ?",
              options: ["OPCVM Actions", "OPCVM Diversifié", "OPCVM Monétaire", "OPCVM Obligataire Long Terme"],
              correct: 2,
              explanation: "Les OPCVM monétaires investissent dans des placements à très court terme et présentent le risque le plus faible."
            },
            {
              question: "Qu'est-ce qui distingue un Sukuk d'une obligation classique ?",
              options: ["Le Sukuk est plus risqué", "Le Sukuk ne verse pas d'intérêts mais partage les profits", "Le Sukuk est réservé aux entreprises", "Le Sukuk n'existe pas au Maroc"],
              correct: 1,
              explanation: "Conformément à la charia, les Sukuk partagent les profits d'un actif sous-jacent au lieu de verser des intérêts."
            },
            {
              question: "Quel est l'avantage principal des OPCVM pour un débutant ?",
              options: ["Rendement garanti", "Pas de frais", "Gestion professionnelle et diversification automatique", "Investissement uniquement en actions"],
              correct: 2,
              explanation: "Les OPCVM offrent une gestion par des professionnels et une diversification naturelle, idéal pour débuter."
            },
            {
              question: "Pour un horizon de placement de 2 ans, quel instrument est le plus adapté ?",
              options: ["Actions volatiles", "OPCVM Actions", "Obligations court terme ou OPCVM monétaire", "Sukuk long terme"],
              correct: 2,
              explanation: "Sur un horizon court, il faut privilégier les instruments stables comme les obligations court terme ou les OPCVM monétaires."
            }
          ]
        }
      ]
    }
  },

  3: {
    1: {
      title: "Introduction à l'Analyse",
      content: [
        {
          type: "intro",
          text: "Bienvenue dans le Module 3 ! Vous allez apprendre les deux grandes méthodes d'analyse utilisées par les investisseurs professionnels : l'analyse technique et l'analyse fondamentale. Ces outils vous aideront à prendre des décisions d'investissement éclairées."
        },
        {
          type: "two_columns",
          left: {
            title: "Analyse Technique",
            color: "blue",
            text: "Étudie les graphiques et les tendances de prix pour prédire les mouvements futurs.",
            items: ["Basée sur les prix historiques", "Utilise des indicateurs mathématiques", "Idéale pour le timing d'achat/vente", "Vision court à moyen terme"]
          },
          right: {
            title: "Analyse Fondamentale",
            color: "green",
            text: "Évalue la valeur intrinsèque d'une entreprise à travers ses données financières.",
            items: ["Basée sur les états financiers", "Évalue la santé de l'entreprise", "Idéale pour sélectionner les bonnes valeurs", "Vision moyen à long terme"]
          }
        },
        {
          type: "tip",
          text: "Les meilleurs investisseurs combinent les deux approches : l'analyse fondamentale pour choisir QUOI acheter, et l'analyse technique pour décider QUAND acheter."
        }
      ]
    },
    2: {
      title: "Analyse Technique - Graphiques",
      content: [
        {
          type: "paragraph",
          text: "L'analyse technique repose sur l'étude des graphiques de prix. Voici les types de graphiques et les concepts fondamentaux à maîtriser."
        },
        {
          type: "cards",
          title: "Types de Graphiques",
          items: [
            { title: "Graphique en ligne", text: "Le plus simple : relie les prix de clôture. Idéal pour visualiser la tendance générale sur une longue période.", color: "blue" },
            { title: "Graphique en barres (OHLC)", text: "Affiche l'ouverture, le plus haut, le plus bas et la clôture pour chaque période. Plus d'informations qu'un graphique en ligne.", color: "green" },
            { title: "Graphique en chandeliers japonais", text: "Le plus populaire. Corps coloré (vert = hausse, rouge = baisse) avec des mèches montrant les extrêmes. Permet d'identifier des patterns.", color: "purple" }
          ]
        },
        {
          type: "definitions",
          items: [
            { term: "Support", definition: "Niveau de prix où la demande est suffisamment forte pour empêcher le prix de baisser davantage. C'est un 'plancher' technique." },
            { term: "Résistance", definition: "Niveau de prix où l'offre est suffisamment forte pour empêcher le prix de monter davantage. C'est un 'plafond' technique." },
            { term: "Tendance haussière", definition: "Série de sommets et de creux de plus en plus hauts. Signal d'achat potentiel." },
            { term: "Tendance baissière", definition: "Série de sommets et de creux de plus en plus bas. Signal de prudence ou de vente." },
            { term: "Canal", definition: "Le prix évolue entre un support et une résistance parallèles. Permet d'identifier des zones d'achat et de vente." }
          ]
        }
      ]
    },
    3: {
      title: "Indicateurs Techniques Clés",
      content: [
        {
          type: "paragraph",
          text: "Les indicateurs techniques sont des formules mathématiques appliquées aux données de prix et de volume. Voici les plus utilisés par les investisseurs au Maroc."
        },
        {
          type: "cards",
          title: "Indicateurs de tendance",
          items: [
            { title: "Moyennes Mobiles (MM)", text: "Moyenne des prix sur une période donnée (20, 50, 200 jours). Quand le prix est au-dessus de la MM, la tendance est haussière. Le croisement de deux MM (ex: MM50 croise MM200 à la hausse = 'golden cross') est un signal d'achat fort.", color: "blue" },
            { title: "MACD", text: "Moving Average Convergence Divergence. Compare deux moyennes mobiles exponentielles. Quand la ligne MACD croise la ligne de signal vers le haut = achat. Vers le bas = vente.", color: "green" }
          ]
        },
        {
          type: "cards",
          title: "Indicateurs de momentum",
          items: [
            { title: "RSI (Relative Strength Index)", text: "Oscille entre 0 et 100. Au-dessus de 70 = surachat (potentielle baisse). En dessous de 30 = survente (potentielle hausse). Très utilisé sur les valeurs du MASI.", color: "purple" },
            { title: "Volumes", text: "Le volume de transactions confirme ou infirme un mouvement de prix. Une hausse avec des volumes forts est plus fiable qu'une hausse sans volume.", color: "orange" }
          ]
        },
        {
          type: "tip",
          text: "Ne vous fiez jamais à un seul indicateur. Utilisez-en 2 ou 3 qui se confirment mutuellement. Et souvenez-vous : l'analyse technique indique des probabilités, pas des certitudes."
        }
      ]
    },
    4: {
      title: "Analyse Fondamentale - Bases",
      content: [
        {
          type: "intro",
          text: "L'analyse fondamentale cherche à déterminer la valeur réelle (intrinsèque) d'une entreprise en étudiant ses données financières, son secteur d'activité et l'environnement économique global."
        },
        {
          type: "cards",
          title: "Les trois niveaux d'analyse",
          items: [
            { title: "Analyse macroéconomique", text: "PIB du Maroc, inflation, taux de change, politique monétaire de Bank Al-Maghrib, investissements publics. Ces facteurs affectent toutes les entreprises.", color: "blue" },
            { title: "Analyse sectorielle", text: "Dynamisme du secteur, concurrence, réglementation, perspectives de croissance. Certains secteurs surperforment selon le cycle économique.", color: "green" },
            { title: "Analyse de l'entreprise", text: "États financiers, gouvernance, avantages compétitifs, qualité du management, perspectives de croissance spécifiques.", color: "purple" }
          ]
        },
        {
          type: "paragraph",
          text: "Au Maroc, les entreprises cotées publient leurs résultats semestriels et annuels. Ces publications sont des moments clés pour l'analyse fondamentale. Consultez les rapports financiers sur le site de la Bourse de Casablanca et les notes d'analystes des sociétés de bourse."
        }
      ]
    },
    5: {
      title: "États Financiers",
      content: [
        {
          type: "paragraph",
          text: "Les états financiers sont la matière première de l'analyse fondamentale. Toute entreprise cotée est obligée de les publier. Voici comment les lire :"
        },
        {
          type: "cards",
          title: "Les 3 états financiers essentiels",
          items: [
            { title: "Compte de Résultat (CPC)", text: "Montre la performance sur une période : chiffre d'affaires - charges = résultat net. C'est la 'fiche de paie' de l'entreprise. Un résultat net en croissance est un bon signe.", color: "blue" },
            { title: "Bilan", text: "Photo de la situation à un instant T : ce que l'entreprise possède (actifs) vs ce qu'elle doit (passifs). La différence = capitaux propres. Un bilan sain a plus d'actifs que de dettes.", color: "green" },
            { title: "Tableau des Flux de Trésorerie", text: "Montre d'où vient et où va l'argent réel. Un flux de trésorerie opérationnel positif signifie que l'activité génère du cash. C'est souvent plus fiable que le résultat net.", color: "purple" }
          ]
        },
        {
          type: "example",
          title: "Lecture rapide d'un bilan",
          text: "Prenons une entreprise cotée au Maroc avec : Actifs = 5 milliards MAD, Dettes = 2 milliards MAD, Capitaux propres = 3 milliards MAD. Le ratio d'endettement = 2/3 = 67%, ce qui est correct. Si les capitaux propres étaient négatifs, ce serait un signal d'alarme."
        }
      ]
    },
    6: {
      title: "Ratios Financiers",
      content: [
        {
          type: "paragraph",
          text: "Les ratios financiers permettent de comparer des entreprises entre elles et d'évaluer si une action est chère ou bon marché."
        },
        {
          type: "definitions",
          items: [
            { term: "PER (Price Earnings Ratio)", definition: "Prix de l'action ÷ Bénéfice par action. Indique combien de fois les bénéfices sont payés. PER du MASI ≈ 20x. Un PER bas peut indiquer une opportunité, un PER élevé une surévaluation." },
            { term: "P/B (Price to Book)", definition: "Prix de l'action ÷ Valeur comptable par action. P/B < 1 signifie que l'action cote en dessous de sa valeur comptable. Utile pour les banques." },
            { term: "Rendement du dividende", definition: "Dividende annuel ÷ Prix de l'action × 100. Un rendement de 4-5% est considéré comme attractif au Maroc. Maroc Telecom et les cimentiers offrent souvent de bons rendements." },
            { term: "ROE (Return on Equity)", definition: "Résultat net ÷ Capitaux propres × 100. Mesure la rentabilité pour les actionnaires. Un ROE > 15% est excellent. Les banques marocaines affichent souvent des ROE de 12-18%." },
            { term: "Marge nette", definition: "Résultat net ÷ Chiffre d'affaires × 100. Indique quelle part du CA reste en profit. Compare les entreprises du même secteur." },
            { term: "Gearing (endettement net/fonds propres)", definition: "Mesure le niveau d'endettement. Un ratio < 50% est sain. Attention aux entreprises très endettées en période de hausse des taux." }
          ]
        },
        {
          type: "tip",
          text: "Comparez toujours les ratios d'une entreprise avec ceux de son secteur et sa propre historique. Un PER de 25 peut être normal pour une entreprise technologique mais élevé pour une cimenterie."
        }
      ]
    },
    7: {
      title: "Analyse Sectorielle Maroc",
      content: [
        {
          type: "intro",
          text: "Le marché boursier marocain est dominé par quelques secteurs clés. Comprendre leurs dynamiques est essentiel pour bien investir."
        },
        {
          type: "cards",
          title: "Secteurs majeurs de la Bourse de Casablanca",
          items: [
            { title: "Banques (~35% de la capitalisation)", text: "Attijariwafa Bank, BCP, BMCE BoA. Moteur du marché, portées par l'expansion africaine et la croissance du crédit. Dividendes réguliers. Sensibles aux taux directeurs de BAM.", color: "blue" },
            { title: "Télécoms (~15%)", text: "Maroc Telecom domine. Rendement en dividendes élevé (~5%). Croissance portée par le data mobile et l'expansion en Afrique subsaharienne.", color: "green" },
            { title: "Immobilier & BTP (~10%)", text: "Addoha, Alliances, CIMAR, LafargeHolcim. Secteur cyclique, boosté par les projets Coupe du Monde 2030 et les programmes de logement.", color: "purple" },
            { title: "Mines (~8%)", text: "Managem (or, argent, cobalt), SMI. Très lié aux cours internationaux des matières premières. Diversification géographique en Afrique.", color: "orange" },
            { title: "Agroalimentaire (~8%)", text: "Cosumar, Lesieur Cristal, Centrale Danone. Secteur défensif, moins volatile. Bénéficie de la consommation locale stable.", color: "red" }
          ]
        },
        {
          type: "paragraph",
          text: "Les perspectives 2025-2030 sont portées par : les investissements liés à la Coupe du Monde 2030, la transition énergétique (solaire, éolien, hydrogène vert), la digitalisation de l'économie et le développement du marché africain pour les entreprises marocaines."
        }
      ]
    },
    8: {
      title: "Stratégies de Valeur",
      content: [
        {
          type: "highlight",
          title: "L'investissement Value",
          text: "Acheter des actions qui se négocient en dessous de leur valeur intrinsèque estimée. L'idée : le marché sous-évalue parfois de bonnes entreprises."
        },
        {
          type: "paragraph",
          text: "La stratégie Value, popularisée par Benjamin Graham et Warren Buffett, consiste à identifier des entreprises solides dont le prix de marché est inférieur à leur valeur réelle. Au Maroc, cette approche est particulièrement pertinente car le marché est moins suivi par les analystes, ce qui crée des opportunités."
        },
        {
          type: "cards",
          title: "Critères de sélection Value",
          items: [
            { title: "PER attractif", text: "Cherchez des PER inférieurs à la moyenne sectorielle. Un PER de 10-12 sur une entreprise rentable peut indiquer une opportunité.", color: "blue" },
            { title: "P/B < 1", text: "L'action cote en dessous de sa valeur comptable. Vérifiez que les actifs sont réels et valorisés correctement.", color: "green" },
            { title: "Dividende élevé et régulier", text: "Un rendement > 4% avec un historique de distribution stable indique une entreprise mature et profitable.", color: "purple" },
            { title: "Bilan solide", text: "Peu de dettes, bonne trésorerie. L'entreprise peut résister aux crises sans demander de l'argent aux actionnaires.", color: "orange" }
          ]
        },
        {
          type: "tip",
          text: "Attention au 'piège Value' : une action peut être bon marché pour de bonnes raisons (déclin du secteur, mauvaise gestion). Analysez toujours le POURQUOI du prix bas."
        }
      ]
    },
    9: {
      title: "Stratégies de Croissance",
      content: [
        {
          type: "highlight",
          title: "L'investissement Growth",
          text: "Acheter des actions d'entreprises dont les bénéfices croissent plus vite que la moyenne du marché, même si elles semblent 'chères' selon les critères classiques."
        },
        {
          type: "cards",
          title: "Critères de sélection Growth",
          items: [
            { title: "Croissance du CA > 10%/an", text: "L'entreprise gagne des parts de marché et développe ses activités rapidement.", color: "blue" },
            { title: "Croissance des bénéfices > 15%/an", text: "Les profits augmentent encore plus vite que le chiffre d'affaires, signe d'efficacité opérationnelle.", color: "green" },
            { title: "Position concurrentielle forte", text: "Leader de son marché, marque reconnue, barrières à l'entrée élevées.", color: "purple" },
            { title: "Investissements importants (CAPEX)", text: "L'entreprise réinvestit massivement pour croître plutôt que de distribuer tous ses profits.", color: "orange" }
          ]
        },
        {
          type: "example",
          title: "Exemple au Maroc",
          text: "Les banques marocaines avec leur expansion en Afrique subsaharienne sont un bon exemple de growth : elles investissent massivement dans de nouvelles filiales pour capturer la croissance des marchés africains, ce qui alimente une croissance des bénéfices soutenue."
        }
      ]
    },
    10: {
      title: "Stratégies Mixtes",
      content: [
        {
          type: "intro",
          text: "En pratique, les investisseurs les plus performants ne se limitent pas à une seule stratégie. Voici comment combiner les approches."
        },
        {
          type: "cards",
          title: "Stratégies combinées",
          items: [
            { title: "GARP (Growth at Reasonable Price)", text: "Chercher la croissance mais à un prix raisonnable. Critère clé : PEG ratio (PER ÷ taux de croissance) < 1. Combine le meilleur du Value et du Growth.", color: "blue" },
            { title: "Core-Satellite", text: "Cœur du portefeuille (70%) = OPCVM diversifiés pour la stabilité. Satellites (30%) = actions individuelles sélectionnées pour booster la performance.", color: "green" },
            { title: "DCA (Dollar Cost Averaging)", text: "Investir un montant fixe chaque mois (ex: 2 000 MAD/mois en OPCVM). Vous achetez plus quand c'est bas, moins quand c'est haut. Élimine le stress du timing.", color: "purple" },
            { title: "Dividendes + Croissance", text: "Sélectionner des entreprises qui versent des dividendes ET qui augmentent ces dividendes chaque année. Revenus croissants + appréciation du capital.", color: "orange" }
          ]
        },
        {
          type: "tip",
          text: "La stratégie DCA est particulièrement adaptée au marché marocain pour les investisseurs salariés : investissez automatiquement une partie de votre salaire chaque mois dans un OPCVM. La discipline est le meilleur atout de l'investisseur."
        }
      ]
    },
    11: {
      title: "Application Pratique",
      content: [
        {
          type: "intro",
          text: "Mettons en pratique toutes les techniques apprises en analysant une situation réelle."
        },
        {
          type: "case_study",
          cases: [
            {
              name: "Analyse d'une banque cotée",
              situation: "Chiffre d'affaires : 25 milliards MAD (+8%). Résultat net : 4 milliards MAD (+12%). PER : 15x. P/B : 1,8x. ROE : 14%. Dividende : 3,5%. Endettement maîtrisé.",
              recommendation: "Analyse fondamentale positive : croissance soutenue, rentabilité attractive, valorisation raisonnable. Techniquement, si l'action est au-dessus de sa MM200 avec un RSI entre 40-60, c'est un bon point d'entrée.",
              color: "blue"
            },
            {
              name: "Analyse d'un cimentier",
              situation: "CA : 5 milliards MAD (+15% grâce aux projets CdM 2030). Marge nette : 25%. PER : 22x (élevé vs historique). Dividende : 4%. Carnet de commandes record.",
              recommendation: "Fondamentaux excellents portés par les infrastructures. Valorisation tendue mais justifiée par la visibilité des projets. Stratégie : accumuler sur repli (baisse de 5-10%) plutôt qu'acheter au plus haut.",
              color: "green"
            }
          ]
        },
        {
          type: "paragraph",
          text: "L'exercice pratique consiste à appliquer cette méthodologie à 2-3 entreprises de votre choix sur la Bourse de Casablanca. Consultez les rapports financiers et les graphiques pour formuler votre propre avis."
        }
      ]
    },
    12: {
      title: "Examen Final Module 3",
      content: [
        {
          type: "quiz",
          questions: [
            {
              question: "Que signifie un RSI supérieur à 70 ?",
              options: ["L'action est survendue", "L'action est en zone de surachat", "L'action va forcément monter", "Le volume est élevé"],
              correct: 1,
              explanation: "Un RSI > 70 indique une zone de surachat. L'action pourrait corriger à la baisse, mais ce n'est pas une certitude."
            },
            {
              question: "Un PER de 10 signifie que :",
              options: ["L'action vaut 10 MAD", "Il faut 10 ans de bénéfices actuels pour 'rembourser' le prix de l'action", "L'action a baissé de 10%", "Le dividende est de 10%"],
              correct: 1,
              explanation: "Le PER = Prix / Bénéfice par action. Un PER de 10 signifie que vous payez 10 fois les bénéfices annuels."
            },
            {
              question: "Quelle stratégie consiste à investir un montant fixe chaque mois ?",
              options: ["Value Investing", "Growth Investing", "DCA (Dollar Cost Averaging)", "Day Trading"],
              correct: 2,
              explanation: "Le DCA consiste à investir régulièrement un montant fixe, quel que soit le niveau du marché. Cela lisse le prix d'achat moyen."
            },
            {
              question: "Le 'Golden Cross' en analyse technique, c'est :",
              options: ["Quand le RSI atteint 100", "Quand la MM50 croise la MM200 à la hausse", "Quand le prix atteint un record", "Quand les volumes explosent"],
              correct: 1,
              explanation: "Le Golden Cross se produit quand la moyenne mobile 50 jours passe au-dessus de la MM200. C'est un signal haussier fort."
            },
            {
              question: "Le ROE mesure :",
              options: ["Le cours de l'action", "La rentabilité des capitaux propres", "Le niveau d'endettement", "Le chiffre d'affaires"],
              correct: 1,
              explanation: "ROE = Résultat Net / Capitaux Propres. Il mesure combien l'entreprise génère de profit pour chaque dirham investi par les actionnaires."
            }
          ]
        }
      ]
    }
  },

  4: {
    1: {
      title: "Principes de Gestion",
      content: [
        {
          type: "intro",
          text: "Bienvenue dans le dernier module ! Vous avez les connaissances pour investir. Maintenant, apprenons à gérer un portefeuille comme un professionnel : allocation, suivi, rééquilibrage et optimisation de la performance."
        },
        {
          type: "cards",
          title: "Les 4 piliers de la gestion de portefeuille",
          items: [
            { title: "1. Planification", text: "Définir vos objectifs, horizon et tolérance au risque. Construire une politique d'investissement claire.", color: "blue" },
            { title: "2. Construction", text: "Sélectionner les actifs et définir les pondérations selon votre allocation cible.", color: "green" },
            { title: "3. Suivi", text: "Mesurer la performance, comparer aux benchmarks et surveiller les risques.", color: "purple" },
            { title: "4. Rééquilibrage", text: "Ajuster régulièrement le portefeuille pour maintenir l'allocation cible.", color: "orange" }
          ]
        }
      ]
    },
    2: {
      title: "Allocation d'Actifs",
      content: [
        {
          type: "highlight",
          title: "La décision la plus importante",
          text: "Des études montrent que l'allocation d'actifs explique plus de 90% de la performance d'un portefeuille sur le long terme. Le choix des titres individuels compte moins que la répartition entre classes d'actifs."
        },
        {
          type: "profiles",
          items: [
            {
              title: "Allocation Prudente",
              color: "green",
              description: "Priorité à la préservation du capital.",
              allocation: "60% Obligations + 25% Monétaire + 15% Actions",
              rendement: "3-5%/an attendu",
              ideal: "Horizon < 3 ans ou faible tolérance au risque"
            },
            {
              title: "Allocation Équilibrée",
              color: "yellow",
              description: "Compromis rendement/risque.",
              allocation: "40% Actions + 40% Obligations + 20% Alternatifs",
              rendement: "5-8%/an attendu",
              ideal: "Horizon 3-7 ans"
            },
            {
              title: "Allocation Dynamique",
              color: "red",
              description: "Recherche de performance maximale.",
              allocation: "70% Actions + 20% Obligations + 10% Alternatifs",
              rendement: "8-12%/an attendu",
              ideal: "Horizon > 7 ans et forte tolérance au risque"
            }
          ]
        },
        {
          type: "tip",
          text: "La règle simple '100 - votre âge = % en actions' est un bon point de départ. À 30 ans = 70% actions. À 60 ans = 40% actions. Ajustez selon votre situation personnelle."
        }
      ]
    },
    3: {
      title: "Construction de Portefeuille",
      content: [
        {
          type: "intro",
          text: "Passons de la théorie à la pratique : comment construire concrètement votre portefeuille d'investissement."
        },
        {
          type: "cards",
          title: "Étapes de construction",
          items: [
            { title: "Étape 1 : Budget", text: "Déterminez le montant à investir. Règle : gardez 3-6 mois de dépenses en épargne de précaution AVANT d'investir. Ne placez que l'argent dont vous n'aurez pas besoin.", color: "blue" },
            { title: "Étape 2 : Allocation stratégique", text: "Définissez les % par classe d'actifs selon votre profil (voir section précédente). C'est votre feuille de route long terme.", color: "green" },
            { title: "Étape 3 : Sélection", text: "Choisissez les instruments spécifiques. Privilégiez les OPCVM pour débuter, puis ajoutez des titres directs progressivement.", color: "purple" },
            { title: "Étape 4 : Exécution", text: "Ouvrez un compte titres, passez vos ordres. Utilisez la stratégie DCA pour entrer progressivement (3-6 mois).", color: "orange" }
          ]
        },
        {
          type: "example",
          title: "Portefeuille modèle 100 000 MAD - Profil Équilibré",
          text: "• 25 000 MAD - OPCVM Actions Maroc (ex: Attijari Actions)\n• 15 000 MAD - Actions directes (3-4 grandes caps : Attijariwafa, IAM, CIMAR)\n• 30 000 MAD - OPCVM Obligataire MT (ex: CDG Moyen Terme)\n• 20 000 MAD - Bons du Trésor via OPCVM\n• 10 000 MAD - OPCVM Monétaire (réserve tactique)"
        }
      ]
    },
    4: {
      title: "Mesure de Performance",
      content: [
        {
          type: "paragraph",
          text: "Pour savoir si votre portefeuille performe bien, il faut mesurer et comparer. Voici les métriques essentielles."
        },
        {
          type: "definitions",
          items: [
            { term: "Rendement total", definition: "Plus-values + Dividendes/Coupons reçus. Exprimé en pourcentage par rapport au capital investi. Calculez-le annualisé pour comparer les périodes." },
            { term: "Rendement ajusté au risque (Sharpe)", definition: "(Rendement du portefeuille - Taux sans risque) ÷ Volatilité. Plus le ratio est élevé, meilleur est le rendement par unité de risque prise. Un Sharpe > 1 est bon." },
            { term: "Volatilité", definition: "Écart-type des rendements. Mesure les fluctuations. Une volatilité de 10% signifie que votre portefeuille peut varier de ±10% autour de sa moyenne." },
            { term: "Drawdown maximum", definition: "La perte maximale depuis un pic. Si votre portefeuille est passé de 100 000 à 85 000 MAD puis est remonté, le drawdown max est de -15%. Important pour évaluer votre résistance psychologique." },
            { term: "Alpha", definition: "Rendement excédentaire par rapport au benchmark. Alpha positif = vous faites mieux que le marché. C'est l'objectif ultime de la gestion active." }
          ]
        },
        {
          type: "tip",
          text: "Suivez votre performance mensuellement mais ne réagissez pas à chaque fluctuation. Évaluez sur des périodes d'au moins 1 an avant de modifier votre stratégie."
        }
      ]
    },
    5: {
      title: "Benchmarking",
      content: [
        {
          type: "paragraph",
          text: "Un benchmark est un indice de référence qui permet d'évaluer si votre portefeuille fait mieux ou moins bien que le marché."
        },
        {
          type: "cards",
          title: "Benchmarks du marché marocain",
          items: [
            { title: "MASI", text: "Indice global de la Bourse de Casablanca. Référence pour un portefeuille 100% actions Maroc. C'est le benchmark le plus courant.", color: "blue" },
            { title: "MBI (Morocco Bond Index)", text: "Indice obligataire marocain. Référence pour la partie obligations de votre portefeuille.", color: "green" },
            { title: "Indice composite", text: "Pour un portefeuille mixte, créez votre propre benchmark : ex. 50% MASI + 50% MBI pour un profil équilibré.", color: "purple" },
            { title: "Taux sans risque", text: "Le rendement des Bons du Trésor 3 mois (~2,5%). C'est le rendement minimum que vous devriez battre.", color: "orange" }
          ]
        },
        {
          type: "paragraph",
          text: "Si votre portefeuille fait +8% alors que le MASI fait +12%, vous sous-performez malgré un rendement positif. Inversement, si vous faites -5% quand le MASI fait -15%, votre gestion du risque est excellente."
        }
      ]
    },
    6: {
      title: "Rééquilibrage",
      content: [
        {
          type: "highlight",
          title: "Pourquoi rééquilibrer ?",
          text: "Avec le temps, les différentes classes d'actifs évoluent à des rythmes différents. Si les actions montent beaucoup, elles prendront une part trop importante de votre portefeuille, augmentant le risque au-delà de votre tolérance."
        },
        {
          type: "example",
          title: "Illustration concrète",
          text: "Allocation cible : 50% actions / 50% obligations. Après 1 an de hausse boursière, votre portefeuille est devenu 65% actions / 35% obligations. Rééquilibrer = vendre 15% d'actions et acheter 15% d'obligations pour revenir à 50/50."
        },
        {
          type: "cards",
          title: "Quand rééquilibrer ?",
          items: [
            { title: "Méthode calendaire", text: "Rééquilibrez à date fixe : tous les 6 mois ou une fois par an. Simple et discipliné.", color: "blue" },
            { title: "Méthode par seuil", text: "Rééquilibrez quand une classe d'actifs dévie de plus de 5-10% de sa cible. Plus réactif mais demande un suivi régulier.", color: "green" },
            { title: "Méthode hybride", text: "Vérifiez trimestriellement et rééquilibrez uniquement si un seuil de 5% est dépassé. Meilleur compromis.", color: "purple" }
          ]
        },
        {
          type: "tip",
          text: "Le rééquilibrage vous force à 'acheter bas et vendre haut' de manière mécanique. C'est contre-intuitif (on vend ce qui monte pour acheter ce qui baisse) mais c'est prouvé comme efficace sur le long terme."
        }
      ]
    },
    7: {
      title: "Gestion des Risques",
      content: [
        {
          type: "intro",
          text: "La gestion des risques est ce qui différencie un investisseur amateur d'un investisseur discipliné. L'objectif n'est pas d'éliminer le risque mais de le maîtriser."
        },
        {
          type: "cards",
          title: "Techniques de gestion des risques",
          items: [
            { title: "Diversification", text: "Minimum 5 secteurs, 3 classes d'actifs. Ne mettez jamais plus de 10% sur une seule valeur. C'est votre première ligne de défense.", color: "blue" },
            { title: "Stop-loss mental", text: "Fixez à l'avance le niveau de perte acceptable (-15% à -20% sur une position). Si ce seuil est atteint, vendez sans hésiter pour limiter les dégâts.", color: "red" },
            { title: "Réserve de liquidité", text: "Gardez toujours 10-20% du portefeuille en monétaire/cash. Cela vous permet de saisir les opportunités lors des baisses du marché.", color: "green" },
            { title: "Corrélation", text: "Choisissez des actifs qui ne bougent pas dans la même direction. Les obligations montent souvent quand les actions baissent (décorrélation).", color: "purple" }
          ]
        },
        {
          type: "paragraph",
          text: "Au Maroc, les principaux risques à surveiller sont : la concentration sectorielle (les banques pèsent 35% du MASI), le risque de liquidité sur les petites valeurs, et le risque de change si vous investissez à l'international."
        }
      ]
    },
    8: {
      title: "Fiscalité des Investissements",
      content: [
        {
          type: "intro",
          text: "Comprendre la fiscalité est essentiel pour optimiser vos rendements nets. Voici le cadre fiscal marocain applicable aux investissements."
        },
        {
          type: "cards",
          title: "Régime fiscal au Maroc",
          items: [
            { title: "Plus-values sur actions", text: "Taxées à 15% (IR sur profits de cession). Abattement de 50% si les titres sont détenus plus de 2 ans, et 70% au-delà de 4 ans. Incitation claire à investir sur le long terme !", color: "blue" },
            { title: "Dividendes", text: "Retenue à la source de 15%. Ce taux est libératoire (pas d'imposition supplémentaire). Les dividendes d'OPCVM suivent le même régime.", color: "green" },
            { title: "Intérêts (obligations)", text: "Retenue à la source de 20% sur les revenus de placements à revenu fixe. Possibilité d'opter pour le taux libératoire.", color: "purple" },
            { title: "PEA (Plan d'Épargne en Actions)", text: "Exonération totale des plus-values après 5 ans de détention ! Plafond de 600 000 MAD. C'est l'outil fiscal le plus avantageux pour les investisseurs marocains.", color: "orange" }
          ]
        },
        {
          type: "tip",
          text: "Ouvrez un PEA dès que possible, même avec un petit montant. Le compteur des 5 ans commence à l'ouverture du plan. Après 5 ans, toutes vos plus-values sont exonérées d'impôt !"
        }
      ]
    },
    9: {
      title: "Cadre Réglementaire",
      content: [
        {
          type: "paragraph",
          text: "Investir dans un cadre réglementé vous protège. Voici les points essentiels du cadre réglementaire marocain à connaître."
        },
        {
          type: "cards",
          title: "Vos droits en tant qu'investisseur",
          items: [
            { title: "Droit à l'information", text: "Les sociétés cotées doivent publier leurs résultats semestriels et annuels, les opérations importantes et tout fait pouvant affecter le cours. Consultez le site de la Bourse de Casablanca.", color: "blue" },
            { title: "Protection de l'épargne", text: "L'AMMC veille à ce que les intermédiaires respectent les règles et protège les investisseurs contre les pratiques abusives. Un fonds de garantie existe pour les comptes titres.", color: "green" },
            { title: "Transparence des frais", text: "Votre intermédiaire doit vous communiquer clairement tous les frais : courtage, droits de garde, frais de gestion OPCVM. Demandez un récapitulatif annuel.", color: "purple" },
            { title: "Droit de réclamation", text: "En cas de litige, vous pouvez saisir l'AMMC qui dispose d'un service de médiation pour les investisseurs particuliers.", color: "orange" }
          ]
        },
        {
          type: "tip",
          text: "Avant d'ouvrir un compte chez un intermédiaire, vérifiez qu'il est agréé par l'AMMC. La liste est publique et mise à jour régulièrement."
        }
      ]
    },
    10: {
      title: "Projet Final",
      content: [
        {
          type: "intro",
          text: "Félicitations ! Vous avez acquis toutes les connaissances nécessaires. Ce projet final vous permet de mettre en pratique l'ensemble de vos apprentissages."
        },
        {
          type: "highlight",
          title: "Votre Mission",
          text: "Construisez votre propre portefeuille d'investissement adapté à votre situation réelle."
        },
        {
          type: "cards",
          title: "Étapes du projet",
          items: [
            { title: "1. Définissez votre profil", text: "Analysez votre situation financière, votre tolérance au risque et votre horizon. Rédigez un court paragraphe résumant vos objectifs.", color: "blue" },
            { title: "2. Choisissez votre allocation", text: "Déterminez les % par classe d'actifs en fonction de votre profil. Justifiez vos choix.", color: "green" },
            { title: "3. Sélectionnez vos instruments", text: "Pour chaque classe, identifiez les instruments spécifiques (noms d'OPCVM, actions, etc.) avec les critères d'analyse fondamentale et technique.", color: "purple" },
            { title: "4. Planifiez le suivi", text: "Définissez votre fréquence de rééquilibrage, vos benchmarks et vos seuils de stop-loss.", color: "orange" },
            { title: "5. Optimisez la fiscalité", text: "Intégrez le PEA et les abattements fiscaux dans votre stratégie pour maximiser le rendement net.", color: "red" }
          ]
        },
        {
          type: "paragraph",
          text: "Prenez le temps de réaliser ce projet sérieusement. C'est la transition entre la théorie et votre pratique réelle d'investisseur sur le marché marocain."
        }
      ]
    },
    11: {
      title: "Certification",
      content: [
        {
          type: "highlight",
          title: "Félicitations ! Vous avez terminé la formation !",
          text: "Vous avez parcouru les 4 modules complets de la formation Igodar Digital sur l'investissement au Maroc. Vous maîtrisez désormais les fondamentaux, les instruments, les techniques d'analyse et la gestion de portefeuille."
        },
        {
          type: "cards",
          title: "Ce que vous maîtrisez",
          items: [
            { title: "Module 1 - Fondamentaux", text: "Risque/rendement, diversification, profils d'investisseurs, écosystème marocain.", color: "blue" },
            { title: "Module 2 - Instruments", text: "Actions, obligations, OPCVM, Sukuk et leurs caractéristiques sur le marché marocain.", color: "green" },
            { title: "Module 3 - Analyse", text: "Analyse technique (graphiques, indicateurs), analyse fondamentale (ratios, états financiers), stratégies.", color: "purple" },
            { title: "Module 4 - Gestion", text: "Allocation, construction de portefeuille, mesure de performance, rééquilibrage, fiscalité.", color: "orange" }
          ]
        },
        {
          type: "paragraph",
          text: "Votre parcours d'investisseur ne fait que commencer. Continuez à apprendre, restez informé de l'actualité des marchés, et surtout, investissez avec discipline et patience. Les meilleurs rendements se construisent sur le long terme."
        },
        {
          type: "tip",
          text: "Restez connecté avec Igodar Digital ! De nouveaux programmes sont en préparation : Finance Islamique avancée, Trading actif, et Investissement en Afrique. Vous serez les premiers informés."
        }
      ]
    }
  }
}

export default moduleContents
