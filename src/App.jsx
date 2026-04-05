import './App.css'
import React, { useState, useMemo, useCallback } from 'react'
import {
  BookOpen,
  TrendingUp,
  BarChart3,
  PieChart,
  Clock,
  Users,
  Award,
  ChevronRight,
  Home,
  Menu,
  X,
  Play,
  FileText,
  Calculator,
  CheckCircle,
  ArrowLeft,
  Star,
  Trophy,
  Target,
  Globe,
  Video,
  BookOpenCheck,
  Brain,
  Gamepad2,
  GraduationCap,
  Shield,
  UserPlus,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  LogOut,
  Sparkles,
  Bell,
  Gift,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  Info,
  Quote,
  ChevronDown,
  ChevronUp,
  Handshake,
  Send,
  MapPin,
  Building2
} from 'lucide-react'
import moduleContents from './moduleContents'

// Images
import risqueRendementImg from './assets/risque_rendement.png'
import diversificationImg from './assets/diversification_portefeuille.png'
import ecosystemeImg from './assets/ecosysteme_financier_maroc.png'
import vocabulaireImg from './assets/vocabulaire_financier.png'
import actionsBourseImg from './assets/actions_bourse.png'
import obligationsSukukImg from './assets/obligations_sukuk.png'
import opcvmImg from './assets/opcvm_diversification.png'
import analyseTechniqueImg from './assets/analyse_technique.png'
import analyseFondamentaleImg from './assets/analyse_fondamentale.png'
import gestionPortefeuilleImg from './assets/gestion_portefeuille.png'
import outilsInteractifsImg from './assets/outils_interactifs.png'

const initialModules = [
  {
    id: 1,
    title: "Les Fondamentaux de l'Investissement",
    description: "Découvrez les concepts de base : risque, rendement, diversification et l'écosystème financier marocain",
    duration: "2h 30min",
    lessons: 8,
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    difficulty: "Débutant",
    image: risqueRendementImg,
    sections: [
      { id: 1, title: "Introduction au Module", type: "video", duration: "15min", image: risqueRendementImg, videoUrl: "/finthread_videos/module1_fondamentaux_investissement.mp4" },
      { id: 2, title: "Objectifs d'Apprentissage", type: "article", duration: "10min", image: diversificationImg },
      { id: 3, title: "Risque et Rendement", type: "interactive", duration: "25min", image: risqueRendementImg },
      { id: 4, title: "La Diversification", type: "video", duration: "20min", image: diversificationImg },
      { id: 5, title: "L'Écosystème Financier Marocain", type: "article", duration: "30min", image: ecosystemeImg },
      { id: 6, title: "Vocabulaire Financier Essentiel", type: "quiz", duration: "15min", image: vocabulaireImg },
      { id: 7, title: "Profils d'Investisseurs", type: "interactive", duration: "20min", image: risqueRendementImg },
      { id: 8, title: "Quiz Final du Module", type: "quiz", duration: "15min", image: diversificationImg }
    ]
  },
  {
    id: 2,
    title: "Les Instruments d'Investissement au Maroc",
    description: "Explorez les actions, obligations, OPCVM et Sukuk avec des données chiffrées récentes",
    duration: "3h 15min",
    lessons: 10,
    icon: TrendingUp,
    color: "from-green-500 to-green-600",
    difficulty: "Intermédiaire",
    image: actionsBourseImg,
    sections: [
      { id: 1, title: "Introduction aux Instruments", type: "video", duration: "20min", image: actionsBourseImg, videoUrl: "/finthread_videos/module2_instruments_investissement.mp4" },
      { id: 2, title: "Les Actions - Bourse de Casablanca", type: "article", duration: "25min", image: actionsBourseImg },
      { id: 3, title: "Les Obligations du Trésor", type: "video", duration: "20min", image: obligationsSukukImg },
      { id: 4, title: "Les OPCVM au Maroc", type: "interactive", duration: "30min", image: opcvmImg },
      { id: 5, title: "Les Sukuk - Finance Islamique", type: "article", duration: "25min", image: obligationsSukukImg },
      { id: 6, title: "Comparaison des Instruments", type: "interactive", duration: "20min", image: opcvmImg },
      { id: 7, title: "Données de Performance 2024", type: "article", duration: "15min", image: actionsBourseImg },
      { id: 8, title: "Stratégies de Sélection", type: "video", duration: "25min", image: opcvmImg },
      { id: 9, title: "Cas Pratiques", type: "interactive", duration: "20min", image: actionsBourseImg },
      { id: 10, title: "Évaluation Module 2", type: "quiz", duration: "15min", image: obligationsSukukImg }
    ]
  },
  {
    id: 3,
    title: "Analyse et Stratégies d'Investissement",
    description: "Maîtrisez l'analyse technique et fondamentale pour prendre des décisions éclairées",
    duration: "4h 00min",
    lessons: 12,
    icon: BarChart3,
    color: "from-teal-500 to-teal-600",
    difficulty: "Avancé",
    image: analyseTechniqueImg,
    sections: [
      { id: 1, title: "Introduction à l'Analyse", type: "video", duration: "15min", image: analyseTechniqueImg, videoUrl: "/finthread_videos/module3_analyse_strategies.mp4" },
      { id: 2, title: "Analyse Technique - Graphiques", type: "interactive", duration: "30min", image: analyseTechniqueImg },
      { id: 3, title: "Indicateurs Techniques Clés", type: "video", duration: "25min", image: analyseTechniqueImg },
      { id: 4, title: "Analyse Fondamentale - Bases", type: "article", duration: "30min", image: analyseFondamentaleImg },
      { id: 5, title: "États Financiers", type: "interactive", duration: "35min", image: analyseFondamentaleImg },
      { id: 6, title: "Ratios Financiers", type: "calculator", duration: "25min", image: analyseFondamentaleImg },
      { id: 7, title: "Analyse Sectorielle Maroc", type: "article", duration: "30min", image: analyseFondamentaleImg },
      { id: 8, title: "Stratégies de Valeur", type: "video", duration: "20min", image: analyseFondamentaleImg },
      { id: 9, title: "Stratégies de Croissance", type: "interactive", duration: "25min", image: analyseTechniqueImg },
      { id: 10, title: "Stratégies Mixtes", type: "article", duration: "20min", image: analyseTechniqueImg },
      { id: 11, title: "Application Pratique", type: "simulator", duration: "30min", image: analyseFondamentaleImg },
      { id: 12, title: "Examen Final Module 3", type: "quiz", duration: "25min", image: analyseTechniqueImg }
    ]
  },
  {
    id: 4,
    title: "Gestion de Portefeuille et Performance",
    description: "Optimisez et suivez vos investissements avec les meilleures pratiques professionnelles",
    duration: "3h 45min",
    lessons: 11,
    icon: PieChart,
    color: "from-orange-500 to-orange-600",
    difficulty: "Expert",
    image: gestionPortefeuilleImg,
    sections: [
      { id: 1, title: "Principes de Gestion", type: "video", duration: "20min", image: gestionPortefeuilleImg, videoUrl: "/finthread_videos/module4_gestion_portefeuille.mp4" },
      { id: 2, title: "Allocation d'Actifs", type: "interactive", duration: "30min", image: gestionPortefeuilleImg },
      { id: 3, title: "Construction de Portefeuille", type: "simulator", duration: "35min", image: gestionPortefeuilleImg },
      { id: 4, title: "Mesure de Performance", type: "calculator", duration: "25min", image: gestionPortefeuilleImg },
      { id: 5, title: "Benchmarking", type: "article", duration: "20min", image: gestionPortefeuilleImg },
      { id: 6, title: "Rééquilibrage", type: "interactive", duration: "25min", image: gestionPortefeuilleImg },
      { id: 7, title: "Gestion des Risques", type: "video", duration: "30min", image: gestionPortefeuilleImg },
      { id: 8, title: "Fiscalité des Investissements", type: "article", duration: "25min", image: gestionPortefeuilleImg },
      { id: 9, title: "Conformité et Réglementation", type: "article", duration: "20min", image: gestionPortefeuilleImg },
      { id: 10, title: "Projet Final", type: "project", duration: "40min", image: gestionPortefeuilleImg },
      { id: 11, title: "Certification", type: "certification", duration: "15min", image: gestionPortefeuilleImg }
    ]
  }
]

const getTypeIcon = (type) => {
  switch (type) {
    case 'video': return Video
    case 'article': return BookOpenCheck
    case 'interactive': return Brain
    case 'quiz': return Gamepad2
    case 'calculator': return Calculator
    case 'simulator': return Target
    case 'project': return Trophy
    case 'certification': return GraduationCap
    default: return FileText
  }
}

const getTypeColor = (type) => {
  switch (type) {
    case 'video': return 'text-red-600 bg-red-50'
    case 'article': return 'text-green-600 bg-blue-50'
    case 'interactive': return 'text-purple-600 bg-purple-50'
    case 'quiz': return 'text-green-600 bg-green-50'
    case 'calculator': return 'text-orange-600 bg-orange-50'
    case 'simulator': return 'text-cyan-600 bg-cyan-50'
    case 'project': return 'text-yellow-600 bg-yellow-50'
    case 'certification': return 'text-indigo-600 bg-indigo-50'
    default: return 'text-gray-600 bg-gray-50'
  }
}

// ===== CONTENT RENDERER =====
function ContentRenderer({ content, moduleId, sectionId }) {
  const [quizAnswers, setQuizAnswers] = useState({})
  const [showExplanations, setShowExplanations] = useState({})

  const handleQuizAnswer = (qIdx, optIdx) => {
    setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }))
    setShowExplanations(prev => ({ ...prev, [qIdx]: true }))
  }

  if (!content || !Array.isArray(content)) {
    return <p className="text-gray-500 italic">Contenu en cours de chargement...</p>
  }

  return (
    <div className="space-y-6">
      {content.map((block, idx) => {
        switch (block.type) {
          case 'intro':
            return (
              <div key={idx} className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-4 bg-blue-50/50 p-4 rounded-r-lg">
                {block.text}
              </div>
            )

          case 'paragraph':
            return (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {block.text}
              </p>
            )

          case 'highlight':
            return (
              <div key={idx} className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5">
                {block.title && <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2"><Star className="h-5 w-5" />{block.title}</h4>}
                <p className="text-amber-900">{block.text}</p>
              </div>
            )

          case 'quote':
            return (
              <blockquote key={idx} className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-r-lg italic text-purple-800">
                <Quote className="h-5 w-5 mb-2 text-purple-400" />
                <p>{block.text}</p>
                {block.author && <cite className="block mt-2 text-sm font-semibold not-italic text-purple-600">— {block.author}</cite>}
              </blockquote>
            )

          case 'tip':
            return (
              <div key={idx} className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-green-800">{block.text}</p>
              </div>
            )

          case 'example':
            return (
              <div key={idx} className="bg-blue-50 border border-green-200 rounded-xl p-5">
                {block.title && <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2"><Info className="h-5 w-5" />{block.title}</h4>}
                <p className="text-blue-900">{block.text}</p>
              </div>
            )

          case 'grid':
            return (
              <div key={idx} className="grid gap-4 md:grid-cols-2">
                {block.items.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            )

          case 'cards':
            return (
              <div key={idx} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {block.items.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    {item.icon && <div className="text-2xl mb-2">{item.icon}</div>}
                    <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                    {item.details && <p className="text-gray-500 text-xs mt-2">{item.details}</p>}
                  </div>
                ))}
              </div>
            )

          case 'definitions':
            return (
              <div key={idx} className="space-y-3">
                {block.title && <h4 className="font-bold text-gray-800 text-lg">{block.title}</h4>}
                {block.items.map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <span className="font-bold text-gray-800">{item.term}</span>
                    <span className="text-gray-400 mx-2">—</span>
                    <span className="text-gray-700">{item.definition}</span>
                  </div>
                ))}
              </div>
            )

          case 'two_columns':
            return (
              <div key={idx} className="grid gap-6 md:grid-cols-2">
                {[block.left, block.right].map((col, colIdx) => {
                  const colorMap = { red: 'border-red-400 bg-red-50', green: 'border-green-400 bg-green-50', blue: 'border-blue-400 bg-blue-50', purple: 'border-purple-400 bg-purple-50', orange: 'border-orange-400 bg-orange-50' }
                  const borderColor = colorMap[col.color] || 'border-gray-300 bg-gray-50'
                  return (
                    <div key={colIdx} className={`border-l-4 ${borderColor} rounded-r-xl p-5`}>
                      <h4 className="font-bold text-gray-800 mb-2">{col.title}</h4>
                      <p className="text-gray-700 text-sm mb-3">{col.text}</p>
                      {col.items && (
                        <ul className="space-y-2">
                          {col.items.map((item, j) => (
                            <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                })}
              </div>
            )

          case 'objectives':
            return (
              <div key={idx} className="space-y-3">
                {block.items.map((item, i) => {
                  const colorMap = { green: 'from-green-500 to-green-600', blue: 'from-blue-500 to-blue-600', purple: 'from-teal-500 to-teal-600', orange: 'from-orange-500 to-orange-600', red: 'from-red-500 to-red-600' }
                  const gradient = colorMap[item.color] || 'from-gray-500 to-gray-600'
                  return (
                    <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${gradient} text-white flex-shrink-0`}>
                        <Target className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{item.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )

          case 'profiles':
            return (
              <div key={idx} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {block.items.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center">
                    <div className="text-3xl mb-3">{item.icon || '👤'}</div>
                    <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{item.text}</p>
                    {item.risk && <span className={`text-xs px-2 py-1 rounded-full ${item.risk === 'faible' ? 'bg-green-100 text-green-700' : item.risk === 'moyen' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{item.risk}</span>}
                  </div>
                ))}
              </div>
            )

          case 'case_study':
            return (
              <div key={idx} className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <h4 className="font-bold text-indigo-800">{block.title || "Étude de cas"}</h4>
                </div>
                <p className="text-indigo-900 mb-3">{block.context}</p>
                {block.analysis && <p className="text-indigo-800 text-sm">{block.analysis}</p>}
                {block.conclusion && (
                  <div className="mt-3 pt-3 border-t border-indigo-200">
                    <p className="text-indigo-700 font-medium text-sm">{block.conclusion}</p>
                  </div>
                )}
              </div>
            )

          case 'comparison':
            return (
              <div key={idx} className="overflow-x-auto">
                {block.title && <h4 className="font-bold text-gray-800 mb-3">{block.title}</h4>}
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  {block.headers && (
                    <thead>
                      <tr className="bg-gradient-to-r from-emerald-600 to-green-500 text-white">
                        {block.headers.map((h, i) => (
                          <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {block.rows && block.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          case 'stats':
            return (
              <div key={idx} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {block.items.map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-5 text-center shadow-lg">
                    <p className="text-3xl font-bold">{item.value}</p>
                    <p className="text-white/80 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            )

          case 'quiz':
            return (
              <div key={idx} className="space-y-6">
                {block.title && <h4 className="font-bold text-gray-800 text-lg flex items-center gap-2"><Gamepad2 className="h-5 w-5 text-green-600" />{block.title}</h4>}
                {block.questions && block.questions.map((q, qIdx) => {
                  const answered = quizAnswers[qIdx] !== undefined
                  const isCorrect = quizAnswers[qIdx] === q.correct
                  return (
                    <div key={qIdx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                      <p className="font-semibold text-gray-800 mb-3">{qIdx + 1}. {q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          let optClass = 'border-gray-200 hover:border-green-300 hover:bg-green-50 cursor-pointer'
                          if (answered) {
                            if (optIdx === q.correct) optClass = 'border-green-400 bg-green-50'
                            else if (optIdx === quizAnswers[qIdx] && !isCorrect) optClass = 'border-red-400 bg-red-50'
                            else optClass = 'border-gray-200 opacity-60'
                          }
                          return (
                            <button
                              key={optIdx}
                              onClick={() => !answered && handleQuizAnswer(qIdx, optIdx)}
                              disabled={answered}
                              className={`w-full text-left p-3 border rounded-lg transition-all ${optClass}`}
                            >
                              <span className="font-medium text-sm mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                              <span className="text-sm">{opt}</span>
                              {answered && optIdx === q.correct && <CheckCircle className="inline h-4 w-4 text-green-600 ml-2" />}
                            </button>
                          )
                        })}
                      </div>
                      {showExplanations[qIdx] && q.explanation && (
                        <div className={`mt-3 p-3 rounded-lg text-sm ${isCorrect ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                          <span className="font-semibold">{isCorrect ? 'Correct !' : 'Incorrect.'}</span> {q.explanation}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}

// ===== AUTH PAGE =====
function AuthPage({ onLogin, authMode, setAuthMode }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    acceptTerms: false
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const validateForm = () => {
    const newErrors = {}
    if (authMode === 'register') {
      if (!formData.fullName.trim()) newErrors.fullName = 'Le nom complet est requis'
      if (formData.fullName.trim().length < 3) newErrors.fullName = 'Minimum 3 caractères'
      if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis'
      if (!formData.acceptTerms) newErrors.acceptTerms = 'Vous devez accepter les conditions'
    }
    if (!formData.email.trim()) newErrors.email = "L'email est requis"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide'
    if (!formData.password) newErrors.password = 'Le mot de passe est requis'
    else if (formData.password.length < 6) newErrors.password = 'Minimum 6 caractères'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      if (authMode === 'register') {
        setSuccessMessage('Bienvenue sur Igodar Digital !')
        setTimeout(() => {
          onLogin({ name: formData.fullName, email: formData.email })
        }, 1500)
      } else {
        onLogin({ name: formData.email.split('@')[0], email: formData.email })
      }
    }, 1200)
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const openAuth = (mode) => {
    setAuthMode(mode)
    setShowAuthModal(true)
    setErrors({})
    setSuccessMessage('')
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ═══ NAVBAR ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-lg">Igodar Digital</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => openAuth('login')} className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors px-4 py-2">
              Se connecter
            </button>
            <button onClick={() => openAuth('register')} className="text-sm font-bold bg-gradient-to-r from-emerald-700 to-green-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300">
              S'inscrire — Gratuit
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <div className="bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full uppercase tracking-widest flex items-center gap-2">
                <Shield className="h-3.5 w-3.5" /> Inspiré de la première banque au monde
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Comprenez.<br />Investissez.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">Libérez-vous.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/85 leading-relaxed max-w-2xl">
              Le monde financier se réinvente. Ceux qui comprennent les marchés construisent leur avenir. Les autres le subissent. <strong className="text-white">Choisissez votre camp.</strong>
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => openAuth('register')}
                className="px-8 py-4 bg-white text-emerald-800 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <Play className="h-5 w-5" /> Commencer gratuitement
              </button>
              <button
                onClick={() => openAuth('login')}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <ArrowRight className="h-5 w-5" /> J'ai déjà un compte
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4" /> 4 modules</span>
              <span className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> 41 sections</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13h+ de contenu</span>
              <span className="flex items-center gap-2"><Gift className="h-4 w-4" /> 100% gratuit</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SOCIAL PROOF STRIP ═══ */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">4</p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-1">Modules complets</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">41</p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-1">Sections de cours</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">13h+</p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-1">De formation</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-yellow-400">0 DH</p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-1">Accès complet</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ L'HISTOIRE IGODAR ═══ */}
      <div className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-3">Notre histoire</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Pourquoi <span className="text-emerald-700">Igodar</span> Digital ? 🇲🇦
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Quand la plus ancienne banque du monde inspire la plus moderne des plateformes</p>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3 space-y-5">
              <div className="bg-amber-50/50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                <p className="text-gray-800 leading-relaxed text-lg font-medium">
                  Bien avant Wall Street, bien avant les coffres-forts suisses, le <strong>Maroc</strong> avait déjà inventé la banque.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Les <strong className="text-gray-800">Igoudar</strong> (ⵉⴳⵓⴷⴰⵔ) — greniers collectifs fortifiés du Souss et de l'Anti-Atlas — sont reconnus par les historiens comme <strong className="text-emerald-700">le plus ancien système bancaire de l'humanité</strong>. Chaque famille y disposait de sa propre chambre — un coffre-fort millénaire — pour protéger céréales, bijoux, titres de propriété et documents juridiques.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Plus de <strong>550 igoudar</strong> parsèment encore le Maroc. La ville d'<strong>Agadir</strong> tire son nom de cette institution. Un patrimoine vieux de <strong>1 000 ans</strong> qui a inspiré la confiance financière collective bien avant la banque moderne.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="text-emerald-800 font-semibold leading-relaxed">
                  <strong>Igodar Digital</strong> réinvente cette sagesse. Hier, on protégeait le grain. Aujourd'hui, on bâtit le <em>capital intellectuel</em>. Même philosophie : <strong>protéger, rassembler, élever</strong>.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-6">
                <Shield className="h-8 w-8 text-amber-600 mb-3" />
                <h4 className="font-bold text-amber-900 text-lg mb-2">L'héritage</h4>
                <p className="text-amber-700 text-sm leading-relaxed">1 000 ans d'histoire bancaire amazighe. La confiance financière collective est née ici.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 rounded-2xl p-6">
                <Target className="h-8 w-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-emerald-900 text-lg mb-2">La mission</h4>
                <p className="text-emerald-700 text-sm leading-relaxed">Rendre chaque citoyen capable de lire un marché, évaluer un risque et décider en toute autonomie.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6">
                <Globe className="h-8 w-8 text-teal-600 mb-3" />
                <h4 className="font-bold text-teal-900 text-lg mb-2">L'ambition</h4>
                <p className="text-teal-700 text-sm leading-relaxed">Le Maroc d'abord. L'Afrique ensuite. Chaque marché mérite un programme qui parle sa langue.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ MÉTHODE — 3 piliers ═══ */}
      <div className="bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">La méthode</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Trois piliers. Un objectif.</h2>
            <p className="text-gray-500 mt-2">Fini la théorie abstraite. Chaque concept mène à une décision concrète.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <GraduationCap className="h-7 w-7 text-emerald-700" />
              </div>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Étape 1</div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Comprendre</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Cours structurés, progressifs. Du concept fondamental à la stratégie avancée.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Gamepad2 className="h-7 w-7 text-green-700" />
              </div>
              <div className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">Étape 2</div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Pratiquer</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Quiz, études de cas réelles, données de la Bourse de Casablanca.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <TrendingUp className="h-7 w-7 text-teal-700" />
              </div>
              <div className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2">Étape 3</div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Décider</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Construire un portefeuille, lire un marché, agir avec confiance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ PARTENARIATS & CTA ═══ */}
      <div className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Partenariats</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Les grands projets ne se construisent jamais seul</h2>
            <p className="text-gray-500">Rejoignez un mouvement qui dépasse le profit pour viser l'impact.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <Building2 className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Institutions financières</h4>
                  <p className="text-sm text-gray-500">AMMC, banques, sociétés de gestion</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <GraduationCap className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Universités & Écoles</h4>
                  <p className="text-sm text-gray-500">Intégrez nos programmes dans vos cursus</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <Globe className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">ONG & Organisations</h4>
                  <p className="text-sm text-gray-500">L'inclusion financière comme levier de développement</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <Send className="h-8 w-8 text-emerald-700 mx-auto mb-4" />
                <h4 className="font-bold text-gray-800 text-xl mb-2">Parlons-en</h4>
                <p className="text-gray-500 text-sm mb-6">Une conversation suffit pour démarrer.</p>
                <a
                  href="mailto:contact@finthreadsolutions.com"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-emerald-700 to-green-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail className="inline h-4 w-4 mr-2" />
                  contact@finthreadsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ CTA FINAL ═══ */}
      <div className="bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Prêt à prendre le contrôle de votre avenir financier ?</h2>
          <p className="text-white/70 mb-8 text-lg">Rejoignez les pionniers. Le programme est gratuit, complet, et conçu pour vous.</p>
          <button
            onClick={() => openAuth('register')}
            className="px-10 py-5 bg-white text-emerald-800 font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            Créer mon compte gratuitement
          </button>
        </div>
      </div>

      {/* ═══ FOOTER ═══ */}
      <div className="bg-gray-900 text-white/60 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">Igodar Digital</span>
            <span className="text-white/30">×</span>
            <span className="text-white/50">Igodar Invest</span>
          </div>
          <p className="text-sm">&copy; 2026 Igodar Digital — La première banque du savoir financier 🇲🇦</p>
        </div>
      </div>

      {/* ═══ AUTH MODAL ═══ */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAuthModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 max-h-[90vh] overflow-y-auto animate-in">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {authMode === 'register' ? 'Rejoignez Igodar Digital' : 'Bon retour'}
              </h2>
              <p className="text-gray-500 mt-1 text-sm">
                {authMode === 'register'
                  ? 'Accès complet et gratuit au programme'
                  : 'Reprenez votre progression'
                }
              </p>
            </div>

            {successMessage && (
              <div className="mb-5 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-green-700 font-medium text-sm">{successMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom complet</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Votre nom complet"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                    />
                  </div>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">+212</span>
                    <input
                      type="tel"
                      placeholder="6XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full pl-16 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={authMode === 'register' ? 'Minimum 6 caractères' : 'Votre mot de passe'}
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className={`w-full pl-11 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {authMode === 'register' && (
                <div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={(e) => handleChange('acceptTerms', e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-600">
                      J'accepte les <span className="text-emerald-600 hover:underline">conditions d'utilisation</span> et la <span className="text-emerald-600 hover:underline">politique de confidentialité</span>
                    </span>
                  </label>
                  {errors.acceptTerms && <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-700 to-green-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : authMode === 'register' ? (
                  <><UserPlus className="h-5 w-5" /> Créer mon compte</>
                ) : (
                  <><ArrowRight className="h-5 w-5" /> Se connecter</>
                )}
              </button>
            </form>

            <div className="mt-5 text-center">
              <p className="text-sm text-gray-500">
                {authMode === 'register' ? 'Déjà inscrit ?' : "Pas encore de compte ?"}
                <button
                  onClick={() => {
                    setAuthMode(authMode === 'register' ? 'login' : 'register')
                    setErrors({})
                    setSuccessMessage('')
                  }}
                  className="ml-1 text-emerald-600 font-semibold hover:underline"
                >
                  {authMode === 'register' ? 'Se connecter' : "S'inscrire gratuitement"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ===== NAVIGATION =====
function Navigation({ isOpen, setIsOpen, currentView, setCurrentView, completedSections, totalSections, totalCompleted, user, onLogout }) {
  const progressPercent = totalSections > 0 ? Math.round((totalCompleted / totalSections) * 100) : 0

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out shadow-lg ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="p-6 h-full flex flex-col">
          <div className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 text-white p-4 rounded-xl mb-6 shadow-lg">
            <h2 className="text-lg font-bold">Igodar Digital 🇲🇦</h2>
            <p className="text-xs opacity-80 italic">La première banque du savoir financier</p>
          </div>

          <nav className="space-y-2 flex-1 overflow-y-auto">
            <button
              onClick={() => { setCurrentView({ type: 'home' }); setIsOpen(false) }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                currentView.type === 'home'
                  ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="font-medium">Tableau de Bord</span>
            </button>

            {initialModules.map((module) => {
              const moduleCompleted = module.sections.filter(s => completedSections.has(`${module.id}-${s.id}`)).length
              const moduleProgress = Math.round((moduleCompleted / module.sections.length) * 100)
              const isActive = currentView.type === 'module' && currentView.moduleId === module.id

              return (
                <button
                  key={module.id}
                  onClick={() => { setCurrentView({ type: 'module', moduleId: module.id }); setIsOpen(false) }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <module.icon className="h-4 w-4" />
                  <div className="flex-1 text-left">
                    <span className="font-medium text-sm">Module {module.id}</span>
                    {moduleCompleted > 0 && (
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className={`h-1.5 rounded-full transition-all ${isActive ? 'bg-white/70' : 'bg-green-500'}`}
                          style={{ width: `${moduleProgress}%` }}
                        />
                      </div>
                    )}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {moduleCompleted}/{module.sections.length}
                  </span>
                </button>
              )
            })}
          </nav>

          {/* Overall progress */}
          <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-green-800 text-sm">Progression globale</h3>
              <span className="text-sm font-bold text-green-600">{progressPercent}%</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-emerald-600 to-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-green-600 mt-1">{totalCompleted}/{totalSections} sections complétées</p>
          </div>

          {user && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Déconnexion
              </button>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

// ===== STAT CARD =====
function StatCard({ icon: Icon, title, value, subtitle, gradient }) {
  return (
    <div className={`p-6 rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
          <p className="text-white/70 text-sm mt-1">{subtitle}</p>
        </div>
        <Icon className="h-10 w-10 text-white/80" />
      </div>
    </div>
  )
}

// ===== MODULE CARD (UNLOCKED) =====
function ModuleCard({ module, onClick, completedCount }) {
  const progress = Math.round((completedCount / module.sections.length) * 100)

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${module.color} text-white shadow-lg`}>
            <module.icon className="h-7 w-7" />
          </div>
          <div className="text-right">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
              {module.difficulty}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{module.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{module.description}</p>

        <div className="mb-4">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {module.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {module.lessons} leçons
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progression</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-emerald-600 to-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button className={`w-full py-3 px-6 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-all duration-200 ${
          completedCount === module.sections.length
            ? 'bg-green-500 text-white'
            : 'bg-gradient-to-r from-emerald-600 to-green-500 text-white hover:shadow-lg'
        }`}>
          {completedCount === module.sections.length ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Module terminé
            </>
          ) : completedCount > 0 ? (
            <>
              <Play className="h-4 w-4" />
              Continuer ({completedCount}/{module.sections.length})
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Commencer le module
            </>
          )}
        </button>
      </div>
    </div>
  )
}

// ===== HOME PAGE (POST-LOGIN DASHBOARD) =====
function HomePage({ setCurrentView, completedSections }) {
  const progressPercent = Math.round((completedSections.size / 41) * 100)

  return (
    <div className="space-y-6 p-6">

      {/* ═══ Welcome Banner ═══ */}
      <div className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 text-white p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-yellow-300 uppercase tracking-widest mb-2">Votre tableau de bord</p>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Continuez votre parcours</h1>
            <p className="text-white/70 text-sm">Chaque section complétée vous rapproche de l'autonomie financière.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-4xl font-extrabold">{progressPercent}%</p>
              <p className="text-xs text-white/60 mt-1">Progression</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold">{completedSections.size}<span className="text-lg text-white/50">/41</span></p>
              <p className="text-xs text-white/60 mt-1">Sections</p>
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="relative z-10 mt-4">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-yellow-300 h-2 rounded-full transition-all duration-700"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* ═══ Modules Grid ═══ */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Programme de Formation</h2>
            <p className="text-sm text-gray-500 mt-1">Du débutant curieux au décideur éclairé</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
            <span>🇲🇦</span>
            <span className="font-medium">Maroc</span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {initialModules.map((module) => {
            const completedCount = module.sections.filter(s => completedSections.has(`${module.id}-${s.id}`)).length
            return (
              <ModuleCard
                key={module.id}
                module={module}
                completedCount={completedCount}
                onClick={() => setCurrentView({ type: 'module', moduleId: module.id })}
              />
            )
          })}
        </div>
      </div>

      {/* ═══ Quick info strip ═══ */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <GraduationCap className="h-6 w-6 text-emerald-700" />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Comprendre</h4>
            <p className="text-xs text-gray-500">Cours progressifs et structurés</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Gamepad2 className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Pratiquer</h4>
            <p className="text-xs text-gray-500">Quiz et cas réels marocains</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <TrendingUp className="h-6 w-6 text-teal-700" />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Décider</h4>
            <p className="text-xs text-gray-500">Investir avec confiance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ===== MODULE PAGE =====
function ModulePage({ module, currentView, setCurrentView, completedSections, onSectionComplete }) {
  const [currentSection, setCurrentSection] = useState(currentView.sectionId || 1)

  const handleNavigate = (direction) => {
    if (direction === 'next' && currentSection < module.sections.length) {
      setCurrentSection(currentSection + 1)
    } else if (direction === 'prev' && currentSection > 1) {
      setCurrentSection(currentSection - 1)
    }
  }

  const handleComplete = (sectionId) => {
    onSectionComplete(module.id, sectionId)
    if (sectionId < module.sections.length) {
      setCurrentSection(sectionId + 1)
    }
  }

  const completedCount = module.sections.filter(s => completedSections.has(`${module.id}-${s.id}`)).length
  const progress = (completedCount / module.sections.length) * 100
  const currentSectionData = module.sections.find(s => s.id === currentSection)
  const isSectionCompleted = completedSections.has(`${module.id}-${currentSection}`)

  // Get content from moduleContents
  const sectionContent = moduleContents[module.id]?.[currentSection]?.content || null

  return (
    <div className="space-y-6 p-6">
      {/* Module Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setCurrentView({ type: 'home' })}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{module.title}</h1>
          <p className="text-gray-600">{module.description}</p>
        </div>
        <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${module.color} text-white`}>
          {module.difficulty}
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Progression du module</span>
            <span>{Math.round(progress)}% ({completedCount}/{module.sections.length})</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-600 to-green-500 h-3 rounded-full transition-all duration-500"
              style={{width: `${progress}%`}}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sidebar with sections */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">Contenu du Module</h3>
            </div>
            <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
              {module.sections.map((section) => {
                const TypeIcon = getTypeIcon(section.type)
                const typeColor = getTypeColor(section.type)
                const isCompleted = completedSections.has(`${module.id}-${section.id}`)

                return (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${isCompleted ? 'opacity-60' : ''} ${
                      currentSection === section.id
                        ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-gray-300 rounded-full flex-shrink-0" />
                      )}
                      <div className={`p-1.5 rounded ${currentSection === section.id ? 'bg-white/20' : typeColor}`}>
                        <TypeIcon className={`h-3 w-3 ${currentSection === section.id ? 'text-white' : ''}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{section.title}</div>
                        <div className={`text-xs ${currentSection === section.id ? 'text-white/70' : 'text-gray-500'} flex items-center gap-1`}>
                          <span>Section {section.id}</span>
                          <span>•</span>
                          <span>{section.duration}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${getTypeColor(currentSectionData?.type)}`}>
                  {React.createElement(getTypeIcon(currentSectionData?.type), { className: "h-6 w-6" })}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{currentSectionData?.title}</h2>
                  <p className="text-gray-600">Module {module.id} - Section {currentSection} • {currentSectionData?.duration}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {currentSectionData?.type === 'video' && currentSectionData?.videoUrl ? (
                <div className="mb-6">
                  <video controls className="w-full rounded-lg">
                    <source src={currentSectionData.videoUrl} type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                </div>
              ) : (
                currentSectionData?.image && (
                  <div className="mb-6">
                    <img
                      src={currentSectionData.image}
                      alt={currentSectionData.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )
              )}

              {/* Render actual content from moduleContents */}
              {sectionContent ? (
                <ContentRenderer
                  content={sectionContent}
                  moduleId={module.id}
                  sectionId={currentSection}
                />
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Contenu détaillé de la section "{currentSectionData?.title}".
                    Cette section couvre les concepts essentiels et fournit des exemples pratiques
                    adaptés au contexte du marché financier marocain.
                  </p>
                  <div className="bg-blue-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800">
                      Ce programme a été élaboré par Igodar Digital en partenariat avec Igodar Invest,
                      en conformité avec les réglementations du marché financier marocain
                      et les dernières données économiques disponibles.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleNavigate('prev')}
                  disabled={currentSection === 1}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Précédent
                </button>

                <div className="flex gap-2">
                  {!isSectionCompleted && (
                    <button
                      onClick={() => handleComplete(currentSection)}
                      className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      Marquer comme terminé
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  )}

                  <button
                    onClick={() => handleNavigate('next')}
                    disabled={currentSection === module.sections.length}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    Suivant
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ===== APP =====
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentView, setCurrentView] = useState({ type: 'home' })
  const [completedSections, setCompletedSections] = useState(new Set())
  const [user, setUser] = useState(null)
  const [authMode, setAuthMode] = useState('register')

  const handleLogin = useCallback((userData) => {
    setUser(userData)
  }, [])

  const handleLogout = useCallback(() => {
    setUser(null)
    setAuthMode('login')
  }, [])

  const handleSectionComplete = useCallback((moduleId, sectionId) => {
    setCompletedSections(prev => {
      const next = new Set(prev)
      next.add(`${moduleId}-${sectionId}`)
      return next
    })
  }, [])

  const totalSections = useMemo(() =>
    initialModules.reduce((acc, m) => acc + m.sections.length, 0),
  [])

  const totalCompleted = completedSections.size

  const currentModule = currentView.type === 'module'
    ? initialModules.find(m => m.id === currentView.moduleId)
    : null

  if (!user) {
    return <AuthPage onLogin={handleLogin} authMode={authMode} setAuthMode={setAuthMode} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        currentView={currentView}
        setCurrentView={setCurrentView}
        completedSections={completedSections}
        totalSections={totalSections}
        totalCompleted={totalCompleted}
        user={user}
        onLogout={handleLogout}
      />

      <main className="md:ml-72 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {currentModule ? (
            <ModulePage
              module={currentModule}
              currentView={currentView}
              setCurrentView={setCurrentView}
              completedSections={completedSections}
              onSectionComplete={handleSectionComplete}
            />
          ) : (
            <HomePage setCurrentView={setCurrentView} completedSections={completedSections} />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
