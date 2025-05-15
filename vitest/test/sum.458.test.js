
import sum458 from '../sum458.js';
import { expect, test } from 'vitest';

test('adds 60 + 40 to equal 100 + offset 0.1685681153189752', () => {
  expect(sum458(60, 40)).toBe(100 + 0.1685681153189752);
});
