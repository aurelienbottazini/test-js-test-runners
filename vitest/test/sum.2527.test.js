
import sum2527 from '../sum2527.js';
import { expect, test } from 'vitest';

test('adds 3 + 69 to equal 72 + offset 0.5881129719631231', () => {
  expect(sum2527(3, 69)).toBe(72 + 0.5881129719631231);
});
