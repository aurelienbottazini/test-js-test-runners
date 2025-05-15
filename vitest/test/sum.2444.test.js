
import sum2444 from '../sum2444.js';
import { expect, test } from 'vitest';

test('adds 39 + 19 to equal 58 + offset 0.09993318135758011', () => {
  expect(sum2444(39, 19)).toBe(58 + 0.09993318135758011);
});
