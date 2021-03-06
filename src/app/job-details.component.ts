import { Component } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { ActivatedRoute, Router } from '@angular/router';

import { JobDetails }  from './model/job-details';

import { ModalImageComponent }  from './modal-image.component';

const JOB_ID_TO_IMG_COUNTER : {} = {
  1: {id: 1, name: "",
      details: `<h2>Заборы</h2><p>наша компания занимается производством и установкой заборов под ключ, у нас собственное производство, высокое качество материалла, расширенная гарантия, доступные цены..</p>`,
      imageDetails: [
        "№ 1 - от 33,50(руб) м.п. ",
        "№ 2 - от 43,50(руб) м.п.",
        "№ 3 - от 14,50(руб) м.п.",
        "№ 4 - от 35,50(руб) м.п.",
        "№ 5 - от 65(руб) м<sup>2</sup>",
        "№ 6 - от 42(руб) м<sup>2</sup>",
        "№ 7 - от 65(руб) м<sup>2</sup>",
        "№ 8 - от 95(руб) м<sup>2</sup>",
        "№ 9 - от 65(руб) м<sup>2</sup>",
        "№ 10 - от 35,20(руб) м.п.",
        "№ 11 - от 43,50(руб)м.п.",
        "№ 12 - от 33,50(руб) м.п.",
        "№ 13 - от 33,50(руб) м.п.",
        "№ 14 - от 33,50(руб) м.п.",
        "№ 15 - от 75(руб) м.п.",
        "№ 16 - от 33,50(руб) м.п.",
        "№ 17 - от 12(руб) м.п.",
        "№ 18 - от 43,50(руб) м.п.",
        "№ 19 - от 14,50(руб) м.п.",
        "№ 20 - от 33,50(руб) м.п.",
        "№ 21 - от 14,50(руб) м.п.",
        "№ 22 - от 43,50(руб) м.п.",
        "№ 23 - от 33,50(руб) м.п."
      ]
    },

  2: {id: 2, name: "",
      details: `<h2>Перила</h2><p>Наши работы.</p>`,
      imageDetails: [
        "№ 1 - от 35(руб) м.п.",
        "№ 2 - от 60(руб) м.п.",
        "№ 3 - от 60(руб) м.п.",
        "№ 4 - от 150(руб) м.п.",
        "№ 5 - от 150(руб) м.п.",
        "№ 6 - от 150(руб) м.п.",
        "№ 7 - от 35(руб) м.п."
      ]
    },

  3: {id: 3, name: "",
      details: `<h2>Ворота</h2><p><b>ВОРОТА распашные откатные</b>. Производство и установка ворот быстро качественно.</p>`,
      imageDetails: [
      "№ 1 - от 120(руб) м<sup>2</sup>",
      "№ 2 - от 72(руб) м<sup>2</sup>",
      "№ 3 - от 90(руб) м<sup>2</sup>",
      "№ 4 - от 800(руб) м<sup>2</sup>",
      "№ 5 - от 65(руб) м<sup>2</sup>",
      "№ 6 - от 72(руб) м<sup>2</sup>",
      "№ 7 - от 65(руб) м<sup>2</sup>",
      "№ 8 - от 250(руб) м<sup>2</sup>",
      "№ 9 - от 90(руб) м<sup>2</sup>",
      "№ 10 - от 65(руб) м<sup>2</sup>"
      ]
    },
  4: {id: 4, name: "",
      details: `<h2>Калитки</h2><p>Наши работы.</p>`,
      imageDetails: [
      "№ 1 - от 100(руб) м<sup>2</sup>",
      "№ 2 - от 120(руб) м<sup>2</sup>",
      "№ 3 - от 95(руб) м<sup>2</sup>",
      "№ 4 - от 100(руб) м<sup>2</sup>",
      "№ 5 - от 100(руб) м<sup>2</sup>",
      "№ 6 - от 95(руб) м<sup>2</sup>"
      ]
    },

  5: {id: 5, name: "",
      details: `<h2>Ковка</h2><p>Собственное производство любой сложности кратчайшие сроки доставка установка.</p>`,
      imageDetails: [
      "№ 1 - от 50(руб)",
      "№ 2 - от 60(руб) м<sup>2</sup>",
      "№ 3 - от 100(руб)",
      "№ 4 - от 100(руб)",
      "№ 5 - от 150(руб)",
      "№ 6 - от 30(руб)",
      "№ 7 - от 50(руб)"
      ]
    },
};

@Component({
    selector: 'app',
    templateUrl: 'templates/job-details.html'
})
@Injectable()
export class JobDetailsComponent {

  jobDetail: JobDetails
  sub: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    
    this.sub = this.activatedRoute.params.subscribe(params => {

       let id = Number.parseInt(params['id']);
       if (id === undefined || isNaN(id)) {

         this.jobDetail = JOB_ID_TO_IMG_COUNTER[1];
       } else {

         this.jobDetail = JOB_ID_TO_IMG_COUNTER[id];
       }
    });
  }

  ngOnDestroy() {

    this.sub.unsubscribe();
  }
}
