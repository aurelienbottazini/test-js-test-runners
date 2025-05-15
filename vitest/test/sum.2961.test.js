
import sum2961 from '../sum2961.js';
import { expect, test } from 'vitest';

test('adds 23 + 96 to equal 119 + offset 0.31792361743003095', () => {
  expect(sum2961(23, 96)).toBe(119 + 0.31792361743003095);
});
