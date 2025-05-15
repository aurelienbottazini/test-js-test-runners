
import sum2733 from '../sum2733.js';
import { expect, test } from 'vitest';

test('adds 55 + 43 to equal 98 + offset 0.8391732166295418', () => {
  expect(sum2733(55, 43)).toBe(98 + 0.8391732166295418);
});
