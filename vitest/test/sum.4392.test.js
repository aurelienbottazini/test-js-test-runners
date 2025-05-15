
import sum4392 from '../sum4392.js';
import { expect, test } from 'vitest';

test('adds 63 + 58 to equal 121 + offset 0.09744121876068146', () => {
  expect(sum4392(63, 58)).toBe(121 + 0.09744121876068146);
});
