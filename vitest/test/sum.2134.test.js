
import sum2134 from '../sum2134.js';
import { expect, test } from 'vitest';

test('adds 57 + 60 to equal 117 + offset 0.1856893486474287', () => {
  expect(sum2134(57, 60)).toBe(117 + 0.1856893486474287);
});
