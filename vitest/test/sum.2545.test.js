
import sum2545 from '../sum2545.js';
import { expect, test } from 'vitest';

test('adds 46 + 78 to equal 124 + offset 0.5441206945072723', () => {
  expect(sum2545(46, 78)).toBe(124 + 0.5441206945072723);
});
