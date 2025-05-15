
import sum1008 from '../sum1008.js';
import { expect, test } from 'vitest';

test('adds 93 + 28 to equal 121 + offset 0.8106438409478214', () => {
  expect(sum1008(93, 28)).toBe(121 + 0.8106438409478214);
});
