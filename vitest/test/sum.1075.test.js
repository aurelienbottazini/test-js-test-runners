
import sum1075 from '../sum1075.js';
import { expect, test } from 'vitest';

test('adds 76 + 58 to equal 134 + offset 0.5329769698052131', () => {
  expect(sum1075(76, 58)).toBe(134 + 0.5329769698052131);
});
