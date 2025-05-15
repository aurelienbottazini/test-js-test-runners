
import sum3362 from '../sum3362.js';
import { expect, test } from 'vitest';

test('adds 93 + 81 to equal 174 + offset 0.5034083371384609', () => {
  expect(sum3362(93, 81)).toBe(174 + 0.5034083371384609);
});
