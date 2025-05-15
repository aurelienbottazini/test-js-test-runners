
import sum2535 from '../sum2535.js';
import { expect, test } from 'vitest';

test('adds 7 + 91 to equal 98 + offset 0.7039109822521358', () => {
  expect(sum2535(7, 91)).toBe(98 + 0.7039109822521358);
});
