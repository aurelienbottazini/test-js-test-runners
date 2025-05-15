
import sum3122 from '../sum3122.js';
import { expect, test } from 'vitest';

test('adds 94 + 56 to equal 150 + offset 0.11243897537080716', () => {
  expect(sum3122(94, 56)).toBe(150 + 0.11243897537080716);
});
