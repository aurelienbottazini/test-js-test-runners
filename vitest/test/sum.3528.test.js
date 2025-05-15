
import sum3528 from '../sum3528.js';
import { expect, test } from 'vitest';

test('adds 77 + 3 to equal 80 + offset 0.518699082823517', () => {
  expect(sum3528(77, 3)).toBe(80 + 0.518699082823517);
});
