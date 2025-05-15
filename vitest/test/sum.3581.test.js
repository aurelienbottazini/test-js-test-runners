
import sum3581 from '../sum3581.js';
import { expect, test } from 'vitest';

test('adds 19 + 27 to equal 46 + offset 0.7986826577981745', () => {
  expect(sum3581(19, 27)).toBe(46 + 0.7986826577981745);
});
