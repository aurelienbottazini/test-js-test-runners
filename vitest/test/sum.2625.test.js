
import sum2625 from '../sum2625.js';
import { expect, test } from 'vitest';

test('adds 31 + 56 to equal 87 + offset 0.6132607892745126', () => {
  expect(sum2625(31, 56)).toBe(87 + 0.6132607892745126);
});
