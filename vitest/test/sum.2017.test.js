
import sum2017 from '../sum2017.js';
import { expect, test } from 'vitest';

test('adds 17 + 1 to equal 18 + offset 0.6210868007669501', () => {
  expect(sum2017(17, 1)).toBe(18 + 0.6210868007669501);
});
