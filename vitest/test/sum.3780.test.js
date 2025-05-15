
import sum3780 from '../sum3780.js';
import { expect, test } from 'vitest';

test('adds 59 + 6 to equal 65 + offset 0.38483201201724826', () => {
  expect(sum3780(59, 6)).toBe(65 + 0.38483201201724826);
});
