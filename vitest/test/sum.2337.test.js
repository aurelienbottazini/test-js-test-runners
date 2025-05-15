
import sum2337 from '../sum2337.js';
import { expect, test } from 'vitest';

test('adds 79 + 17 to equal 96 + offset 0.21283028561340933', () => {
  expect(sum2337(79, 17)).toBe(96 + 0.21283028561340933);
});
