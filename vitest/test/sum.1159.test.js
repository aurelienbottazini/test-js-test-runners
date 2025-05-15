
import sum1159 from '../sum1159.js';
import { expect, test } from 'vitest';

test('adds 54 + 1 to equal 55 + offset 0.7505325446690366', () => {
  expect(sum1159(54, 1)).toBe(55 + 0.7505325446690366);
});
