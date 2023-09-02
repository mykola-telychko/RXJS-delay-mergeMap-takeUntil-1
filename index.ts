import { fromEvent, of } from 'rxjs';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/utility/delay
// Example 1: Delay to recognize long press

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');

mousedown$
  .pipe(mergeMap((event) => of(event).pipe(delay(700), takeUntil(mouseup$))))
  .subscribe((event) => console.log('Long Press!', event));
