
import sum2272 from '../sum2272.js';
import { expect, test } from 'vitest';

test('adds 55 + 65 to equal 120 + offset 0.9844249298726997', () => {
  expect(sum2272(55, 65)).toBe(120 + 0.9844249298726997);
});
