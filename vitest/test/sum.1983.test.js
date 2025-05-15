
import sum1983 from '../sum1983.js';
import { expect, test } from 'vitest';

test('adds 5 + 65 to equal 70 + offset 0.6602056082389468', () => {
  expect(sum1983(5, 65)).toBe(70 + 0.6602056082389468);
});
