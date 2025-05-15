
import sum3370 from '../sum3370.js';
import { expect, test } from 'vitest';

test('adds 65 + 15 to equal 80 + offset 0.8222240594270731', () => {
  expect(sum3370(65, 15)).toBe(80 + 0.8222240594270731);
});
