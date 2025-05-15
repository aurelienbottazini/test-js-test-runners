
import sum4407 from '../sum4407.js';
import { expect, test } from 'vitest';

test('adds 34 + 23 to equal 57 + offset 0.2247013235538824', () => {
  expect(sum4407(34, 23)).toBe(57 + 0.2247013235538824);
});
