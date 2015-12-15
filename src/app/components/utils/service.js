export class UtilsService {
  constructor($log) {
    'ngInject';
    this.debug = $log;
  }

  bubbleSort(a){
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i].width > a[i+1].width) {
                var temp = i;
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
  }
}
