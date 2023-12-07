import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowLineHeadSwirlMediumIcon } from './ArrowLineHeadSwirlMediumIcon.js';
import { ClarityBlockQuoteLineIcon2 } from './ClarityBlockQuoteLineIcon2.js';
import { ClarityBlockQuoteLineIcon3 } from './ClarityBlockQuoteLineIcon3.js';
import { ClarityBlockQuoteLineIcon } from './ClarityBlockQuoteLineIcon.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse16Icon } from './Ellipse16Icon.js';
import { Ellipse17Icon } from './Ellipse17Icon.js';
import { Ellipse18Icon } from './Ellipse18Icon.js';
import classes from './LandingPage.module.css';
import { ObjectsIcon2 } from './ObjectsIcon2.js';
import { ObjectsIcon } from './ObjectsIcon.js';
import { Vector5Icon2 } from './Vector5Icon2.js';
import { Vector5Icon3 } from './Vector5Icon3.js';
import { Vector5Icon } from './Vector5Icon.js';
import { Vector6Icon } from './Vector6Icon.js';
import { Vector8Icon } from './Vector8Icon.js';
import { Vector9Icon } from './Vector9Icon.js';
import { Vector10Icon } from './Vector10Icon.js';
import { Vector11Icon } from './Vector11Icon.js';
import { VuesaxBoldBook } from './VuesaxBoldBook/VuesaxBoldBook';
import { VuesaxBoldClock } from './VuesaxBoldClock/VuesaxBoldClock';
import { VuesaxBoldDollarCircle } from './VuesaxBoldDollarCircle/VuesaxBoldDollarCircle';
import { VuesaxBoldPlay } from './VuesaxBoldPlay/VuesaxBoldPlay';
import { VuesaxBoldProfile2user } from './VuesaxBoldProfile2user/VuesaxBoldProfile2user';
import { VuesaxLinearBox2 } from './VuesaxLinearBox2/VuesaxLinearBox2';
import { VuesaxLinearCode } from './VuesaxLinearCode/VuesaxLinearCode';
import { VuesaxLinearPath } from './VuesaxLinearPath/VuesaxLinearPath';
import { VuesaxLinearStatusUp } from './VuesaxLinearStatusUp/VuesaxLinearStatusUp';
import { VuesaxOutlineArrowLeft } from './VuesaxOutlineArrowLeft/VuesaxOutlineArrowLeft';

interface Props {
  className?: string;
}
/* @figmaId 72:2 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.navbar}>
        <div className={classes.beeHave}>BeeHave</div>
        <div className={classes.navItem}>
          <div className={classes.acueil}>Acueil</div>
          <div className={classes.theme}>Thème</div>
          <div className={classes.communaute}>Communauté</div>
          <div className={classes.premium}>Premium</div>
          <div className={classes.nosMentors}>Nos mentors</div>
        </div>
        <div className={classes.btnCta}>
          <div className={classes.seConnecter}>Se Connecter</div>
          <div className={classes.btnSignUp}>
            <div className={classes.sInscrire}>S’inscrire</div>
          </div>
        </div>
      </div>
      <div className={classes.creativiteCollaborationConnais}>
        <div className={classes.textBlock}>Créativité, Collaboration,</div>
        <div className={classes.textBlock2}>Connaissance : </div>
        <div className={classes.textBlock3}>BeeHave, votre </div>
        <div className={classes.textBlock4}>communauté étudiante</div>
      </div>
      <div className={classes.frame1}>
        <div className={classes.commencer}>Commencer</div>
      </div>
      <div className={classes.frame2}>
        <VuesaxBoldPlay className={classes.vuesaxBoldPlay} />
        <div className={classes.regarderLaVideo}>Regarder la Video</div>
      </div>
      <div className={classes.frame16}></div>
      <div className={classes.frame17}>
        <div className={classes.frontViewFemaleTeacherPinkBlou}></div>
      </div>
      <div className={classes.frame4}></div>
      <div className={classes.frame3}>
        <div className={classes.icons8TeamFcLyt7lW5wgUnsplash1}></div>
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.arrowLineHeadSwirlMedium}>
        <ArrowLineHeadSwirlMediumIcon className={classes.icon} />
      </div>
      <div className={classes.frame7}>
        <div className={classes.frame5}>
          <div className={classes.group1}>
            <div className={classes.image2}></div>
          </div>
          <div className={classes.group2}>
            <div className={classes.image3}></div>
          </div>
          <div className={classes.group3}>
            <div className={classes.image4}></div>
          </div>
        </div>
        <div className={classes.frame6}>
          <div className={classes._250K}>250K</div>
          <div className={classes.etudiantsSatisfaits}>Etudiants Satisfaits</div>
        </div>
      </div>
      <div className={classes.benefitSection}>
        <div className={classes.frame8}></div>
        <div className={classes.theBenefitsYouGetWhenYouStudyA}>
          <div className={classes.textBlock5}>The Benefits You Get When</div>
          <div className={classes.textBlock6}>You Study at Shirohige</div>
        </div>
        <div className={classes.frame12}>
          <div className={classes.card1}>
            <div className={classes.rectangle3}></div>
            <div className={classes.frame11}>
              <div className={classes.frame10}>
                <div className={classes.experiencedMentors}>Experienced mentors</div>
              </div>
              <div className={classes.frame9}>
                <VuesaxBoldProfile2user className={classes.vuesaxBoldProfile2user} />
              </div>
            </div>
          </div>
          <div className={classes.card2}>
            <div className={classes.rectangle32}></div>
            <div className={classes.frame112}>
              <div className={classes.frame92}>
                <VuesaxBoldClock className={classes.vuesaxBoldClock} />
              </div>
              <div className={classes.frame102}>
                <div className={classes._247StudyAnywhere}>24/7 Study Anywhere</div>
              </div>
            </div>
          </div>
          <div className={classes.card3}>
            <div className={classes.rectangle33}></div>
            <div className={classes.frame113}>
              <div className={classes.frame93}>
                <VuesaxBoldBook className={classes.vuesaxBoldBook} />
              </div>
              <div className={classes.frame103}>
                <div className={classes.freeEBookEveryweek}>Free E - Book Everyweek</div>
              </div>
            </div>
          </div>
          <div className={classes.card4}>
            <div className={classes.rectangle34}></div>
            <div className={classes.frame114}>
              <div className={classes.frame94}>
                <VuesaxBoldDollarCircle className={classes.vuesaxBoldDollarCircle} />
              </div>
              <div className={classes.frame104}>
                <div className={classes.affordablePrices}>Affordable Prices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame15}>
        <div className={classes.frame13}>
          <div className={classes.partagezEtCollaborezAvecLaComm}>
            <div className={classes.textBlock7}>Partagez et collaborez avec</div>
            <div className={classes.textBlock8}>la communauté</div>
          </div>
        </div>
        <div className={classes.avecNotrePlateformeVousPourrez}>
          Avec notre plateforme, vous pourrez partager vos créations, votre contenu et échanger avec les autres
          étudiants afin de demander des conseils et d’apprendre avec eux.
        </div>
        <div className={classes.frame14}>
          <div className={classes.joindreMaintenant}>Joindre Maintenant!</div>
        </div>
      </div>
      <div className={classes.frame33}>
        <div className={classes.frame34}>
          <div className={classes.nosThematiquesPopulaires}>Nos thématiques populaires</div>
        </div>
        <div className={classes.mettezAJourVosConnaissancesEtV}>
          Mettez à jour vos connaissances et vos compétences s’en perdre de temps ! Sélectionnez les thèmes les plus
          populaires et parcourus par la communauté.
        </div>
      </div>
      <div className={classes.cardRow}>
        <div className={classes.frame25}>
          <div className={classes._11}></div>
          <div className={classes.frame24}>
            <div className={classes.designGraphisme}>Design/Graphisme</div>
          </div>
          <div className={classes.frame26}>
            <div className={classes.designGraphisme2}>Design/Graphisme</div>
            <div className={classes.dansCetteThematiqueVousPourrez}>
              Dans cette thématique, vous pourrez apprendre et partager autour des éléments de conception tels que la
              couleur, la typographie et la composition pour créer des designs visuellement convaincants.
            </div>
          </div>
        </div>
        <div className={classes.frame262}>
          <div className={classes._21}></div>
          <div className={classes.frame242}>
            <div className={classes.developpement}>Développement</div>
          </div>
          <div className={classes.frame263}>
            <div className={classes.developpement2}>Développement</div>
            <div className={classes.aTraversCeThemePeaufinezVosTec}>
              À travers ce théme, peaufinez vos techniques de programmation ou apprenez à l’aide de la communauté afin
              de créer des expériences numériques convaincantes.
            </div>
          </div>
        </div>
        <div className={classes.frame27}>
          <div className={classes._31}></div>
          <div className={classes.frame243}>
            <div className={classes.marketingDigital}>Marketing Digital</div>
          </div>
          <div className={classes.frame264}>
            <div className={classes.marketingDigital2}>Marketing Digital </div>
            <div className={classes.avecCeThemeCherchezADevelopper}>
              Avec ce thème, cherchez à développer vos connaissances et aiguiller vos compétences. Échanger avec la
              communauté dans le but d&#39;acquérir de nouvelles notions et de maitriser les techniques de marketing.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame32}>
        <div className={classes.frame28}>
          <div className={classes.group5}>
            <div className={classes.rectangle22}></div>
            <VuesaxLinearBox2 />
          </div>
          <div className={classes.toutesCategories}>Toutes catégories</div>
        </div>
        <div className={classes.frame29}>
          <div className={classes.group52}>
            <div className={classes.rectangle23}></div>
            <VuesaxLinearPath />
          </div>
          <div className={classes.designGraphisme3}>Design/Graphisme</div>
        </div>
        <div className={classes.frame30}>
          <div className={classes.group53}>
            <div className={classes.rectangle24}></div>
            <VuesaxLinearCode />
          </div>
          <div className={classes.developpement3}>Développement</div>
        </div>
        <div className={classes.frame31}>
          <div className={classes.group54}>
            <div className={classes.rectangle25}></div>
            <VuesaxLinearStatusUp />
          </div>
          <div className={classes.marketingDigital3}>Marketing Digital</div>
        </div>
      </div>
      <div className={classes.oBJECTS}>
        <ObjectsIcon className={classes.icon2} />
      </div>
      <div className={classes.oBJECTS2}>
        <ObjectsIcon2 className={classes.icon3} />
      </div>
      <div className={classes.footerItem}>
        <div className={classes.footerItem2}>
          <div className={classes.footerTitle}>
            <div className={classes.redhairDev}>Redhair.dev</div>
            <div className={classes.weReNotJustDevelopersWeReCreat}>
              <div className={classes.textBlock9}>we&#39;re not just developers, we&#39;re creators, innovators,</div>
              <div className={classes.textBlock10}>and problem solvers. With a passion for turning ideas</div>
              <div className={classes.textBlock11}>into robust, scalable, and elegant software solutions</div>
            </div>
          </div>
          <div className={classes.company}>
            <div className={classes.company2}>Company</div>
            <div className={classes.companyItem}>
              <div className={classes.about}>About</div>
              <div className={classes.career}>Career</div>
              <div className={classes.partners}>Partners</div>
            </div>
          </div>
          <div className={classes.overview}>
            <div className={classes.overview2}>Overview</div>
            <div className={classes.overviewItem}>
              <div className={classes.service}>Service</div>
              <div className={classes.portofolio}>Portofolio</div>
              <div className={classes.article}>Article</div>
            </div>
          </div>
          <div className={classes.explore}>
            <div className={classes.exploreUs}>Explore Us</div>
            <div className={classes.exploreItem}>
              <div className={classes.ourCareer}>Our Career</div>
              <div className={classes.privacy}>Privacy</div>
              <div className={classes.termsConditions}>Terms &amp; Conditions</div>
            </div>
          </div>
          <div className={classes.connect}>
            <div className={classes.connectUs}>Connect Us</div>
            <div className={classes.connectItem}>
              <div className={classes.adminRedhairDev}>admin@redhair.dev</div>
              <div className={classes._21733249}>021 - 733 - 249</div>
              <div className={classes.krendangWestJakarta}>Krendang, West Jakarta</div>
            </div>
          </div>
        </div>
        <div className={classes.lineAndCopyright}>
          <div className={classes.vector5}>
            <Vector5Icon className={classes.icon4} />
          </div>
          <div className={classes.copyright2023AllRightsReserved}>Copyright 2023 • All Rights Reserved Redhair.dev</div>
        </div>
      </div>
      <div className={classes.frame35}>
        <div className={classes.quEnPenseLaCommunaute}>Qu’en pense la communauté?</div>
      </div>
      <div className={classes.frame39}>
        <div className={classes.group7}>
          <div className={classes.vector8}>
            <Vector8Icon className={classes.icon5} />
          </div>
          <div className={classes.vector9}>
            <Vector9Icon className={classes.icon6} />
          </div>
          <div className={classes.ellipse17}>
            <Ellipse17Icon className={classes.icon7} />
          </div>
          <div className={classes.frame38}>
            <div className={classes.kaiNobuki}>Kai Nobuki</div>
            <div className={classes.leadDesigner}>Lead designer</div>
          </div>
          <div className={classes.jeSuisTresSatisfaitDeLApplicat}>
            Je suis très satisfait de l’application BeeHave. Cela fait longtemps que je cherche une application qui me
            permet d’échanger avec les autres afin de savoir comment ils réalisent des designs.
          </div>
          <div className={classes.clarityBlockQuoteLine}>
            <ClarityBlockQuoteLineIcon className={classes.icon8} />
          </div>
        </div>
        <div className={classes.group10}>
          <div className={classes.vector6}>
            <Vector6Icon className={classes.icon9} />
          </div>
          <div className={classes.vector52}>
            <Vector5Icon2 className={classes.icon10} />
          </div>
          <div className={classes.ellipse16}>
            <Ellipse16Icon className={classes.icon11} />
          </div>
          <div className={classes.frame36}>
            <div className={classes.reyliegh}>Reyliegh</div>
            <div className={classes.leadTech}>Lead Tech</div>
          </div>
          <div className={classes.applicationIncroyableFiniDAlle}>
            Application incroyable ! Fini d’aller sur YouTube et de perdre un temps fou à trouver la vidéo qui explique
            correctement ou sur Google pour rechercher de l’inspiration avec BeeHave, je peux désormais me renseigner
            auprès de personne dans ma situation.
          </div>
          <div className={classes.clarityBlockQuoteLine2}>
            <ClarityBlockQuoteLineIcon2 className={classes.icon12} />
          </div>
        </div>
        <div className={classes.group9}>
          <div className={classes.vector10}>
            <Vector10Icon className={classes.icon13} />
          </div>
          <div className={classes.vector11}>
            <Vector11Icon className={classes.icon14} />
          </div>
          <div className={classes.ellipse18}>
            <Ellipse18Icon className={classes.icon15} />
          </div>
          <div className={classes.frame37}>
            <div className={classes.boaHancock}>Boa Hancock</div>
            <div className={classes.webDesigner}>Web Designer</div>
          </div>
          <div className={classes.etantUneEtudianteEnReconversio}>
            Étant une étudiante en reconversion, l’application BeeHave est parfaite pour moi, je peux demander de l’aide
            directement à des étudiants et gagner en compétences rapidement grâce aux nombreux contenus visibles.
          </div>
          <div className={classes.clarityBlockQuoteLine3}>
            <ClarityBlockQuoteLineIcon3 className={classes.icon16} />
          </div>
        </div>
      </div>
      <VuesaxOutlineArrowLeft />
      <VuesaxOutlineArrowLeft className={classes.vuesaxOutlineArrowLeft} />
      <div className={classes.footer}>
        <div className={classes.rectangle3Copy19}></div>
        <div className={classes.rectangle3Copy18}></div>
        <div className={classes.rectangle3Copy17}></div>
        <div className={classes.rectangle3Copy16}></div>
        <div className={classes.rectangle3Copy15}></div>
        <div className={classes.rectangle3Copy14}></div>
        <div className={classes.rectangle3Copy13}></div>
        <div className={classes.rectangle3Copy12}></div>
        <div className={classes.rectangle3Copy11}></div>
        <div className={classes.rectangle3Copy10}></div>
        <div className={classes.rectangle3Copy29}></div>
        <div className={classes.rectangle3Copy28}></div>
        <div className={classes.rectangle3Copy27}></div>
        <div className={classes.rectangle3Copy26}></div>
        <div className={classes.rectangle3Copy25}></div>
        <div className={classes.rectangle3Copy24}></div>
        <div className={classes.rectangle3Copy23}></div>
        <div className={classes.rectangle3Copy22}></div>
        <div className={classes.rectangle3Copy21}></div>
        <div className={classes.rectangle3Copy20}></div>
        <div className={classes.rectangle3Copy39}></div>
        <div className={classes.rectangle3Copy38}></div>
        <div className={classes.rectangle3Copy37}></div>
        <div className={classes.rectangle3Copy36}></div>
        <div className={classes.rectangle3Copy35}></div>
        <div className={classes.rectangle3Copy34}></div>
        <div className={classes.rectangle3Copy33}></div>
        <div className={classes.rectangle3Copy32}></div>
        <div className={classes.rectangle3Copy31}></div>
        <div className={classes.rectangle3Copy30}></div>
        <div className={classes.rectangle3Copy49}></div>
        <div className={classes.rectangle3Copy48}></div>
        <div className={classes.rectangle3Copy47}></div>
        <div className={classes.rectangle3Copy46}></div>
        <div className={classes.rectangle3Copy45}></div>
        <div className={classes.rectangle3Copy44}></div>
        <div className={classes.rectangle3Copy43}></div>
        <div className={classes.rectangle3Copy42}></div>
        <div className={classes.rectangle3Copy41}></div>
        <div className={classes.rectangle3Copy40}></div>
        <div className={classes.rectangle3Copy59}></div>
        <div className={classes.rectangle3Copy58}></div>
        <div className={classes.rectangle3Copy57}></div>
        <div className={classes.rectangle3Copy56}></div>
        <div className={classes.rectangle3Copy55}></div>
        <div className={classes.rectangle3Copy54}></div>
        <div className={classes.rectangle3Copy53}></div>
        <div className={classes.rectangle3Copy52}></div>
        <div className={classes.rectangle3Copy51}></div>
        <div className={classes.rectangle3Copy50}></div>
        <div className={classes.rectangle3Copy69}></div>
        <div className={classes.rectangle3Copy68}></div>
        <div className={classes.rectangle3Copy67}></div>
        <div className={classes.rectangle3Copy66}></div>
        <div className={classes.rectangle3Copy65}></div>
        <div className={classes.rectangle3Copy64}></div>
        <div className={classes.rectangle3Copy63}></div>
        <div className={classes.rectangle3Copy62}></div>
        <div className={classes.rectangle3Copy61}></div>
        <div className={classes.rectangle3Copy60}></div>
        <div className={classes.rectangle3Copy79}></div>
        <div className={classes.rectangle3Copy80}></div>
        <div className={classes.rectangle3Copy90}></div>
        <div className={classes.rectangle3Copy100}></div>
        <div className={classes.rectangle3Copy78}></div>
        <div className={classes.rectangle3Copy81}></div>
        <div className={classes.rectangle3Copy91}></div>
        <div className={classes.rectangle3Copy101}></div>
        <div className={classes.rectangle3Copy77}></div>
        <div className={classes.rectangle3Copy82}></div>
        <div className={classes.rectangle3Copy92}></div>
        <div className={classes.rectangle3Copy102}></div>
        <div className={classes.rectangle3Copy76}></div>
        <div className={classes.rectangle3Copy83}></div>
        <div className={classes.rectangle3Copy93}></div>
        <div className={classes.rectangle3Copy103}></div>
        <div className={classes.rectangle3Copy75}></div>
        <div className={classes.rectangle3Copy84}></div>
        <div className={classes.rectangle3Copy94}></div>
        <div className={classes.rectangle3Copy104}></div>
        <div className={classes.rectangle3Copy74}></div>
        <div className={classes.rectangle3Copy85}></div>
        <div className={classes.rectangle3Copy95}></div>
        <div className={classes.rectangle3Copy105}></div>
        <div className={classes.rectangle3Copy73}></div>
        <div className={classes.rectangle3Copy86}></div>
        <div className={classes.rectangle3Copy96}></div>
        <div className={classes.rectangle3Copy106}></div>
        <div className={classes.rectangle3Copy72}></div>
        <div className={classes.rectangle3Copy87}></div>
        <div className={classes.rectangle3Copy97}></div>
        <div className={classes.rectangle3Copy107}></div>
        <div className={classes.rectangle3Copy71}></div>
        <div className={classes.rectangle3Copy88}></div>
        <div className={classes.rectangle3Copy98}></div>
        <div className={classes.rectangle3Copy108}></div>
        <div className={classes.rectangle3Copy70}></div>
        <div className={classes.rectangle3Copy89}></div>
        <div className={classes.rectangle3Copy99}></div>
        <div className={classes.rectangle3Copy109}></div>
        <div className={classes.ellipse1}>
          <Ellipse1Icon className={classes.icon17} />
        </div>
        <div className={classes.ellipse2}>
          <Ellipse2Icon className={classes.icon18} />
        </div>
        <div className={classes.footerItem3}>
          <div className={classes.footerItem4}>
            <div className={classes.footerTitle2}>
              <div className={classes.beeHave2}>BeeHave</div>
              <div className={classes.leMeilleurLieuDEchangeEtDAppre}>
                Le meilleur lieu d’échange et d&#39;apprentissage en ligne pour les étudiants, avec du contenu divers et
                variés permettant à chacun de trouver ce qui lui convient.
              </div>
            </div>
            <div className={classes.company3}>
              <div className={classes.entreprise}>Entreprise</div>
              <div className={classes.companyItem2}>
                <div className={classes.aPropos}>A propos</div>
                <div className={classes.career2}>Career</div>
                <div className={classes.partenariats}>Partenariats</div>
              </div>
            </div>
            <div className={classes.overview3}>
              <div className={classes.overview4}>Overview</div>
              <div className={classes.overviewItem2}>
                <div className={classes.courses}>Courses</div>
                <div className={classes.bootcamp}>Bootcamp</div>
                <div className={classes.ourGraduates}>Our Graduates</div>
              </div>
            </div>
            <div className={classes.explore2}>
              <div className={classes.exploreUs2}>Explore Us</div>
              <div className={classes.exploreItem2}>
                <div className={classes.ourCareer2}>Our Career</div>
                <div className={classes.privacy2}>Privacy</div>
                <div className={classes.termsConditions2}>Terms &amp; Conditions</div>
              </div>
            </div>
            <div className={classes.connect2}>
              <div className={classes.connectezVous}>Connectez-vous</div>
              <div className={classes.connectItem2}>
                <div className={classes.adminBeeHaveCom}>admin@BeeHave.com</div>
                <div className={classes._21554249}>021 - 554 - 249</div>
                <div className={classes.paris11France}>Paris 11, France.</div>
              </div>
            </div>
          </div>
          <div className={classes.lineAndCopyright2}>
            <div className={classes.vector53}>
              <Vector5Icon3 className={classes.icon19} />
            </div>
            <div className={classes.copyright2023AllRightsReserved2}>Copyright 2023 • All Rights Reserved mlw.fig</div>
          </div>
        </div>
      </div>
    </div>
  );
});
