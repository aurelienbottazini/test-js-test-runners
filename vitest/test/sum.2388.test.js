
import sum2388 from '../sum2388.js';
import { expect, test } from 'vitest';

test('adds 44 + 72 to equal 116 + offset 0.3746294476222871', () => {
  expect(sum2388(44, 72)).toBe(116 + 0.3746294476222871);
});
