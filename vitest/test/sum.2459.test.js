
import sum2459 from '../sum2459.js';
import { expect, test } from 'vitest';

test('adds 74 + 62 to equal 136 + offset 0.9571617643430903', () => {
  expect(sum2459(74, 62)).toBe(136 + 0.9571617643430903);
});
