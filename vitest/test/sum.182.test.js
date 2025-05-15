
import sum182 from '../sum182.js';
import { expect, test } from 'vitest';

test('adds 18 + 74 to equal 92 + offset 0.8279899662020792', () => {
  expect(sum182(18, 74)).toBe(92 + 0.8279899662020792);
});
