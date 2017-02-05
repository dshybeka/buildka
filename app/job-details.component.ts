import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { JobDetails }  from './model/job-details';

const JOB_ID_TO_IMG_COUNTER : {} = {
  1: {id: 1, name: "",
      details: `<h2>Заборы</h2><p>У нас самые лучшие заборы, бла бла бла.</p>`,
      imageDetails: [
        "№ 1 - 3 500 за кв.м.",
        "№ 2 - 500 за кв.м.",
        "№ 3 - 2 500 за кв.м.",
        "№ 4 - 1 500 за кв.м.",
        "№ 5 - 3 400 за кв.м.",
        "№ 6 - 4 500 за кв.м.",
        "№ 7 - 500 за кв.м.",
      ]
    },

  2: {id: 2, name: "",
      details: `<h2>Перила</h2><p>У нас самые лучшие перила, бла бла бла.</p>`,
      imageDetails: [
        "№ 1 - 900 р. пог.м.",
        "№ 2 - 1 200 р. пог.м.",
        "№ 3 - 3 000 р.пог.м.",
        "№ 4 - 3 000 р.пог.м.",
        "№ 5 - 800 р. пог.м.",
        "№ 6 - 600 р. пог.м."
      ]
    },

  3: {id: 3, name: "",
      details: `<h2>Ворота</h2><p>У нас самые лучшие ворота, бла бла бла.</p>`,
      imageDetails: [
      ]
    },
  4: {id: 4, name: "",
      details: `<h2>Двери</h2><p>У нас самые лучшие двери, бла бла бла.</p>`,
      imageDetails: [
      ]
    },

  5: {id: 5, name: "",
      details: `<h2>Ковка</h2><p>У нас шикарная ковка, бла бла бла.</p>`,
      imageDetails: [
      ]
    },
};

@Component({
    selector: 'app',
    templateUrl: 'app/templates/job-details.html'
})
export class JobDetailsComponent {

  jobDetail: JobDetails
  sub: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    
    this.sub = this.activatedRoute.params.subscribe(params => {

       let id = Number.parseInt(params['id']);
       this.jobDetail = JOB_ID_TO_IMG_COUNTER[id];
    });

  }

  ngOnDestroy() {

    this.sub.unsubscribe();
  }
}
