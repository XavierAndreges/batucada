import { Injectable } from '@angular/core';
import { Track } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  static getRepertoire(): Track[] {
    return [
      { 
        id: 'negrepelisse', 
        title : 'Negrepelisse',
        folder: 'Negrepelisse', 
        files : [
          { name: 'funk', file: '1-funk.mp3', isPlaying: false},
          { name: 'break 1', file: '2-break1.mp3', isPlaying: false},
          { name: 'reggae', file: '3-reggae.mp3', isPlaying: false},
          { name: 'variation reggae', file: '4-variation.mp3', isPlaying: false},
          { name: 'intro soussa', file: '5-intro_soussa.mp3', isPlaying: false},
          { name: 'soussa', file: '6-soussa.mp3', isPlaying: false},
          { name: 'break soussa', file: '7-break_soussa.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'timbaladaTuca', 
        title : 'Timbalada',
        folder: 'Timbalada', 
        files : [
          { name: 'break 1', file: '1-break1.mp3', isPlaying: false},
          { name: 'break 2', file: '2-break2.mp3', isPlaying: false},
          { name: 'cassé', file: '3-casse.mp3', isPlaying: false},
          { name: 'base', file: '4-base.mp3', isPlaying: false},
          { name: 'coupe', file: '5-coupe.mp3', isPlaying: false},
          { name: 'caisse claire', file: '6-caisse.mp3', isPlaying: false},
          { name: 'répinique', file: '7-repinique.mp3', isPlaying: false},
          { name: 'timbau', file: '8-timbau.mp3', isPlaying: false},
        ]
      },
      { 
        id: 'bahiaTuca', 
        title : 'Bahia 2',
        folder: 'Bahia', 
        files : [
          { name: 'break', file: '1-break.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false},
          { name: 'break 3', file: '3-break3.mp3', isPlaying: false},
          { name: 'base 3', file: '4-base3.mp3', isPlaying: false},
          { name: 'break variation', file: '5-break_variation.mp3', isPlaying: false},
          { name: 'base variation', file: '6-variation.mp3', isPlaying: false},
          { name: 'coupe', file: '7-coupe.mp3', isPlaying: false},
          { name: 'caisse claire', file: '8-caisse.mp3', isPlaying: false},
          { name: 'répinique', file: '9-repinique.mp3', isPlaying: false},
          { name: 'timbau', file: '10-timbau.mp3', isPlaying: false},
          { name: 'stop', file: '11-stop.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'mecalor', 
        title : 'Me Calor',
        folder: 'MeCalor', 
        files : [
          { name: 'break 1', file: '1-break1.mp3', isPlaying: false},
          { name: 'break 2', file: '2-break2.mp3', isPlaying: false},
          { name: 'base', file: '3-base.mp3', isPlaying: false},
          { name: 'timbau', file: '4-timbau.mp3', isPlaying: false},
          { name: 'timbau lent', file: '5-timbau_lent.mp3', isPlaying: false},
          { name: 'coupe', file: '6-coupe.mp3', isPlaying: false},
          { name: 'surdo + coupe', file: '7-surdo_coupe.mp3', isPlaying: false},
          { name: 'surdo + répinique', file: '8-surdo_rep.mp3', isPlaying: false},
          { name: 'surdo + caisse claire', file: '9-surdo_cc.mp3', isPlaying: false},
          { name: 'caisse claire lente', file: '10-cc_lente.mp3', isPlaying: false},
        ]
      },
      { 
        id: 'tudu',
        title : 'Tudu', 
        folder: 'Tudu', 
        files : [
          { name: 'intro', file: '1-intro.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false},
          { name: 'break 1', file: '3-break1.mp3', isPlaying: false},
          { name: 'break 2', file: '4-break2.mp3', isPlaying: false},
          { name: 'surdo', file: '5-surdo.mp3', isPlaying: false},
          { name: 'coupe', file: '6-coupe.mp3', isPlaying: false},
          { name: 'surdo + coupe', file: '7-surdo_coupe.mp3', isPlaying: false},
          { name: 'caisse claire', file: '8-caisse_claire.mp3', isPlaying: false},
          { name: 'caisse claire lente', file: '9-caisse_claire_lente.mp3', isPlaying: false},
          { name: 'répinique', file: '10-repinique.mp3', isPlaying: false},
          { name: 'timbau', file: '11-timbau.mp3', isPlaying: false},
          { name: 'timbau light', file: '12-timbau_light.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'samba-reggae-class', 
        title : 'Samba Reggae Class', 
        folder: 'SambaReggaeClass', 
        files : [
          { name: 'intro', file: '1-intro.mp3', isPlaying: false},
          { name: 'break 1', file: '2-break1.mp3', isPlaying: false},
          { name: 'base', file: '3-base.mp3', isPlaying: false},
          { name: 'break 2', file: '4-break2.mp3', isPlaying: false},
          { name: 'surdo + coupe', file: '5-coupe.mp3', isPlaying: false},
          { name: 'timbao', file: '6-timbao.mp3', isPlaying: false},
          { name: 'caisse claire', file: '7-caisse_claire.mp3', isPlaying: false},
          { name: 'répinique', file: '8-repinique.mp3', isPlaying: false},
          { name: 'timbao solo', file: '9-Timbau_solo123.mp3', isPlaying: false},
          { name: 'répinique solo', file: '10-repinique_solo123.mp3', isPlaying: false}
        ]
      }
      /*,
      { 
        id: 'calor', 
        title : 'Calor',
        folder: 'Calor', 
        files : [
          { name: 'intro', file: '1-intro.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false},
          { name: 'break', file: '3-break.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'zef1', 
        title : 'Zef 1',
        folder: 'Zef1', 
        files : [
          { name: 'intro', file: '1-intro.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false},
          { name: 'break 1', file: '3-break1.mp3', isPlaying: false},
          { name: 'intro variation', file: '4-intro_variation.mp3', isPlaying: false},
          { name: 'variation', file: '5-variation.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'timbalada', 
        title : 'Timbalada', 
        folder: 'Timbalada', 
        files : [
          { name: 'intro', file: '1-intro.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false},
          { name: 'break 1', file: '3-break1.mp3', isPlaying: false},
          { name: 'appel tercero', file: '4-appel_tercero.mp3', isPlaying: false},
          { name: 'break 2', file: '5-break2.mp3', isPlaying: false},
          { name: 'solo', file: '6-solo.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'bahia', 
        title : 'Bahia', 
        folder: 'Bahia', 
        files : [
          { name: 'break 1', file: '1-break1.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false},
          { name: 'variation', file: '3-variation.mp3', isPlaying: false},
          { name: 'break hip-hop', file: '4-break-hip-hop.mp3', isPlaying: false},
          { name: 'base hip-hop', file: '5-base-hip-hop.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'sambalub', 
        title : 'Sambalub', 
        folder: 'Sambalub', 
        files : [
          { name: 'intro', file: '1-Intro.mp3', isPlaying: false},
          { name: 'break 1', file: '2-break1.mp3', isPlaying: false},
          { name: 'base', file: '3-base.mp3', isPlaying: false},
          { name: 'base grave', file: '4-base_grave.mp3', isPlaying: false},
          { name: 'break 2', file: '5-break2.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'olodum', 
        title : 'Olodum', 
        folder: 'Olodum', 
        files : [
          { name: 'break', file: '1-break.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false},
          { name: 'entrée tercero', file: '3-entree_tercero.mp3', isPlaying: false},
          { name: 'chant', file: '4-chant.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'batucalub', 
        title : 'Batucalub', 
        folder: 'Batucalub', 
        files : [
          { name: 'break', file: '1-break.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'energia', 
        title : 'Energia', 
        folder: 'Energia', 
        files : [
          { name: 'break 2', file: '1-break2.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false},
          { name: 'break 1 long', file: '3-break1.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'yemanja', 
        title : 'La Yemanja', 
        folder: 'Yemanja', 
        files : [
          { name: 'intro', file: '1-intro.mp3', isPlaying: false},
          { name: 'base', file: '2-base.mp3', isPlaying: false},
          { name: 'tercero signe3', file: '3-tercero_signe3.mp3', isPlaying: false},
          { name: 'conversation', file: '4-conversation.mp3', isPlaying: false},
          { name: 'conversation tercero', file: '5-conversation_tercero.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'swing-axe', 
        title : 'Swing Axe', 
        folder: 'Swing_Axe', 
        files : [
          { name: 'intro', file: '0-intro.mp3', isPlaying: false},
          { name: 'break 1', file: '1-break1.mp3', isPlaying: false},
          { name: 'base 1', file: '2-base1.mp3', isPlaying: false},
          { name: 'break 2', file: '3-break2.mp3', isPlaying: false},
          { name: 'base 2', file: '4-base2.mp3', isPlaying: false},
          { name: 'break 2-3', file: '5-break2-3.mp3', isPlaying: false},
          { name: 'break 3', file: '6-break3.mp3', isPlaying: false},
          { name: 'base 3', file: '7-base3.mp3', isPlaying: false},
          { name: 'variation fin', file: '8-variation_fin.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'samba-reggae', 
        title : 'Samba Reggae', 
        folder: 'SambaReggae', 
        files : [
          { name: 'break', file: 'break.mp3', isPlaying: false},
          { name: 'base', file: 'base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'samba-hegg', 
        title : 'Samba Hegg', 
        folder: 'SambaHegg', 
        files : [
          { name: 'break', file: 'break.mp3', isPlaying: false},
          { name: 'base', file: 'base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'zouk-merengue', 
        title : 'Zouk Merengue', 
        folder: 'ZoukMerengue', 
        files : [
          { name: 'break', file: 'break.mp3', isPlaying: false},
          { name: 'base', file: 'base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'tumbala', 
        title : 'Tumbala', 
        folder: 'Tumbala', 
        files : [
          { name: 'break', file: 'break.mp3', isPlaying: false},
          { name: 'base', file: 'base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'kuruzu', 
        title : 'Kuruzu', 
        folder: 'Kuruzu', 
        files : [
          { name: 'break', file: 'break.mp3', isPlaying: false},
          { name: 'base', file: 'base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'komisir', 
        title : 'Komisir', 
        folder: 'Komisir', 
        files : [
          { name: 'break', file: 'break.mp3', isPlaying: false},
          { name: 'base', file: 'base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'samba-afro/breaks', 
        title : 'Samba Afro : breaks / base', 
        folder: 'samba-afro/breaks', 
        files : [
          { name: 'Break 2', file: 'break2.mp3', isPlaying: false },
          { name: 'Break 3', file: 'break3.mp3', isPlaying: false },
          { name: 'Break 9', file: 'break9.mp3', isPlaying: false },
          { name: 'Base', file: 'base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'samba-afro/multipiste',
        title : 'Samba-afro : multipiste', 
        folder: 'tambores/samba-afro/multipiste', 
        files : [
          { name: 'Surdo', file: 'surdo.mp3', image: 'primero.jpeg'},
          { name: 'Double', file: 'double.mp3', image: 'tercero.jpeg'},
          { name: 'Caisse claire', file: 'caisse_claire.mp3', image: 'caisse_claire.jpeg'},
          { name: 'Répinique', file: 'repinique.mp3', image: 'repinique.jpeg'}
        ]
      },
      { 
        id: 'samba-reggae/live', 
        title : 'Samba Reggae : live', 
        folder: 'samba-reggae/live', 
        files : [
          { name: '1 - cloche', file: '1-cloche.mp3', isPlaying: false },
          { name: '2 - timbau', file: '2-timbau.mp3', isPlaying: false},
          { name: '3 - caisse claire + surdo', file: '3-caisse_claire+surdo.mp3', isPlaying: false},
          { name: '4 - répinique', file: '4-repinique.mp3', isPlaying: false},
          { name: '5 - double', file: '5-double.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'samba-reggae/break', 
        title : 'Samba Reggae : break / base', 
        folder: 'samba-reggae/break', 
        files : [
          { name: 'Break 4-5', file: 'break4-5.mp3', isPlaying: false },
          { name: 'Base', file: 'base.mp3', isPlaying: false, isMultipiste: true},
          { name: 'Solo répinique', file: 'solo_repinique.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'samba-reggae/multipiste',
        title : 'Samba-reggae : multipiste', 
        folder: 'tambores/samba-reggae/multipiste', 
        files : [
          { name: 'Timbau', file: 'timbau.mp3', image: 'timbau.jpeg'},
          { name: 'Cloche', file: 'cloche.mp3', image: 'cloche.jpeg'},
          { name: 'Surdo', file: 'surdo.mp3', image: 'primero.jpeg'},
          { name: 'Double', file: 'double.mp3', image: 'tercero.jpeg'},
          { name: 'Caisse claire', file: 'caisse_claire.mp3', image: 'caisse_claire.jpeg'},
          { name: 'Répinique', file: 'repinique.mp3', image: 'repinique.jpeg'}
        ]
      },
      { 
        id: 'billy-jean',
        title : 'Billy Jean', 
        folder: 'billy-jean', 
        files : [
          { name: '1 - fundo', file: '1-fundo.mp3', isPlaying: false },
          { name: '2 - caisse claire', file: '2-caisse_claire.mp3', isPlaying: false},
          { name: '3 - cloche + timbau', file: '3-cloche+timbau.mp3', isPlaying: false},
          { name: '4 - double', file: '4-double.mp3', isPlaying: false},
          { name: '5 - répinique', file: '5-repinique.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'confirme1', 
        title : 'Confirme 1', 
        folder: 'Confirme1', 
        files : [
          { name: 'Intro', file: 'intro.mp3', isPlaying: false },
          { name: 'Intro 2', file: 'intro2.mp3', isPlaying: false },
          { name: 'Base', file: 'base.mp3', isPlaying: false },
          { name: 'Base répinique', file: 'base_repinique.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'confirme2', 
        title : 'Confirme 2', 
        folder: 'Confirme2(janseca)', 
        files : [
          { name: 'Intro', file: 'intro.mp3', isPlaying: false },
          { name: 'Base', file: 'base.mp3', isPlaying: false },
        ]
      },
      {
        id: 'morceau07', 
        title : 'Morceau 07', 
        folder: 'morceau07', 
        files : [
          { name: '1 - timbau', file: '1-timbau.mp3', isPlaying: false },
          { name: '2 - surdo', file: '2-surdo.mp3', isPlaying: false},
          { name: '3 - repinique', file: '3-repinique.mp3', isPlaying: false},
          { name: '4 - caisse claire', file: '4-caisse_claire.mp3', isPlaying: false},
          { name: '5 - double', file: '5-Double.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'morceau08', 
        title : 'Morceau 08', 
        folder: 'morceau08', 
        files : [
          { name: '1 - break', file: '1-break.mp3', isPlaying: false },
          { name: '2 - base', file: '2-base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'morceau09',
        title : 'Morceau 09', 
        folder: 'morceau09', 
        files : [
          { name: '1 - timbau', file: '1-timbau.mp3', isPlaying: false },
          { name: '2 - break', file: '2-break.mp3', isPlaying: false},
          { name: '3 - base', file: '3-base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'morceau10', 
        title : 'Morceau 10', 
        folder: 'morceau10', 
        files : [
          { name: '1  - caisse claire', file: '1-caisse_claire.mp3', isPlaying: false },
          { name: '2 - surdo', file: '2-surdo.mp3', isPlaying: false},
          { name: '3 - double', file: '3-Double.mp3', isPlaying: false},
          { name: '4 - répinique', file: '4-repinique.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'morceau12',
        title : 'Morceau 12', 
        folder: 'morceau12', 
        files : [
          { name: '1 - timbau', file: '1-timbau.mp3', isPlaying: false },
          { name: '2 - break', file: '2-break.mp3', isPlaying: false},
          { name: '3 - base', file: '3-base.mp3', isPlaying: false}
        ]
      },
      { 
        id: 'morceau14', 
        title : 'Morceau 14', 
        folder: 'morceau14', 
        files : [
          { name: '1 - caisse claire + cloche', file: '1-caisse_claire+cloche.mp3', isPlaying: false },
          { name: '2 - break', file: '2-break.mp3', isPlaying: false},
          { name: '3 - base', file: '3-base.mp3', isPlaying: false}
        ]
      }
      */
    ];
  }

  static getRepertoireBis(): Track[] {
    return [
    ];
  }

  static getMultipiste(): Track[]{
    return [
      { 
        id: 'tambores-samba-reggae-break',
        title : 'Tambores / samba-reggae : multipiste', 
        folder: 'tambores/samba-reggae/multipiste', 
        files : [
          { name: 'Timbau', file: 'timbau.mp3', image: 'timbau.jpeg'},
          { name: 'Cloche', file: 'cloche.mp3', image: 'cloche.jpeg'},
          { name: 'Surdo', file: 'surdo.mp3', image: 'primero.jpeg'},
          { name: 'Double', file: 'double.mp3', image: 'tercero.jpeg'},
          { name: 'Caisse claire', file: 'caisse_claire.mp3', image: 'caisse_claire.jpeg'},
          { name: 'Répinique', file: 'repinique.mp3', image: 'repinique.jpeg'}
        ]
      }
    ]
  }

}