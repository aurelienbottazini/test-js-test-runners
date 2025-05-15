
import sum2789 from '../sum2789.js';
import { expect, test } from 'vitest';

test('adds 18 + 84 to equal 102 + offset 0.5109046049047065', () => {
  expect(sum2789(18, 84)).toBe(102 + 0.5109046049047065);
});
