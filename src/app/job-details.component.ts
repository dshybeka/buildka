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
        "№ 1 - 3 500 за кв.м.",
        "№ 2 - 500 за кв.м.",
        "№ 3 - 2 500 за кв.м.",
        "№ 4 - 1 500 за кв.м.",
        "№ 5 - 3 400 за кв.м.",
        "№ 6 - 4 500 за кв.м.",
        "№ 7 - 500 за кв.м.",
        "№ 8 - 500 за кв.м.",
        "№ 9 - 500 за кв.м.",
        "№ 10 - 500 за кв.м.",
        "№ 11 - 500 за кв.м.",
        "№ 12 - 500 за кв.м.",
        "№ 13 - 500 за кв.м.",
        "№ 14 - 500 за кв.м.",
        "№ 15 - 500 за кв.м.",
        "№ 16 - 500 за кв.м.",
        "№ 17 - 500 за кв.м.",
        "№ 18 - 500 за кв.м.",
        "№ 19 - 500 за кв.м.",
        "№ 20 - 500 за кв.м.",
        "№ 21 - 500 за кв.м.",
        "№ 22 - 500 за кв.м.",
        "№ 23 - 500 за кв.м."
      ]
    },

  2: {id: 2, name: "",
      details: `<h2>Перила</h2><p>Наши работы.</p>`,
      imageDetails: [
        "№ 1 - 900 р. пог.м.",
        "№ 2 - 1 200 р. пог.м.",
        "№ 3 - 3 000 р.пог.м.",
        "№ 4 - 3 000 р.пог.м.",
        "№ 5 - 3 000 р.пог.м.",
        "№ 6 - 3 000 р.пог.м.",
        "№ 7 - 3 000 р.пог.м."
      ]
    },

  3: {id: 3, name: "",
      details: `<h2>Ворота</h2><p><b>ВОРОТА распашные откатные</b>. Производство и установка ворот быстро качественно.</p>`,
      imageDetails: [
      "№ 1 - 900 р.",
      "№ 2 - 1 200 р.",
      "№ 3 - 3 000 р.",
      "№ 4 - 3 000 р.",
      "№ 5 - 3 000 р.",
      "№ 6 - 3 000 р.",
      "№ 7 - 3 000 р.",
      "№ 8 - 3 000 р.",
      "№ 9 - 3 000 р.",
      "№ 10 - 3 000 р."
      ]
    },
  4: {id: 4, name: "",
      details: `<h2>Калитки</h2><p>Наши работы.</p>`,
      imageDetails: [
      "№ 1 - 900 р.",
      "№ 2 - 1 200 р.",
      "№ 3 - 3 000 р.",
      "№ 4 - 3 000 р.",
      "№ 5 - 3 000 р.",
      "№ 6 - 3 000 р."
      ]
    },

  5: {id: 5, name: "",
      details: `<h2>Ковка</h2><p>Собственное производство любой сложности кратчайшие сроки доставка установка.</p>`,
      imageDetails: [
      "№ 1 - 900 р.",
      "№ 2 - 1 200 р.",
      "№ 3 - 1 200 р.",
      "№ 4 - 1 200 р.",
      "№ 5 - 1 200 р.",
      "№ 6 - 1 200 р.",
      "№ 7 - 1 200 р."
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
