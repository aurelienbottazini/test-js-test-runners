
import sum2757 from '../sum2757.js';
import { expect, test } from 'vitest';

test('adds 3 + 25 to equal 28 + offset 0.4267534189749471', () => {
  expect(sum2757(3, 25)).toBe(28 + 0.4267534189749471);
});
