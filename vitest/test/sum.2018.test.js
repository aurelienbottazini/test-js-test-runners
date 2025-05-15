
import sum2018 from '../sum2018.js';
import { expect, test } from 'vitest';

test('adds 78 + 98 to equal 176 + offset 0.6518608867616172', () => {
  expect(sum2018(78, 98)).toBe(176 + 0.6518608867616172);
});
