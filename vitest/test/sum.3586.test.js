
import sum3586 from '../sum3586.js';
import { expect, test } from 'vitest';

test('adds 1 + 13 to equal 14 + offset 0.33674877322118424', () => {
  expect(sum3586(1, 13)).toBe(14 + 0.33674877322118424);
});
