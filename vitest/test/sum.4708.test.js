
import sum4708 from '../sum4708.js';
import { expect, test } from 'vitest';

test('adds 43 + 66 to equal 109 + offset 0.37305362316295354', () => {
  expect(sum4708(43, 66)).toBe(109 + 0.37305362316295354);
});
