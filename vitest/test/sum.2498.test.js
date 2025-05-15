
import sum2498 from '../sum2498.js';
import { expect, test } from 'vitest';

test('adds 37 + 33 to equal 70 + offset 0.3580694711645027', () => {
  expect(sum2498(37, 33)).toBe(70 + 0.3580694711645027);
});
