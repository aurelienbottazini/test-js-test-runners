
import sum2775 from '../sum2775.js';
import { expect, test } from 'vitest';

test('adds 7 + 8 to equal 15 + offset 0.8834884035625366', () => {
  expect(sum2775(7, 8)).toBe(15 + 0.8834884035625366);
});
