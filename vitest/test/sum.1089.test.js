
import sum1089 from '../sum1089.js';
import { expect, test } from 'vitest';

test('adds 35 + 77 to equal 112 + offset 0.11962813288016416', () => {
  expect(sum1089(35, 77)).toBe(112 + 0.11962813288016416);
});
