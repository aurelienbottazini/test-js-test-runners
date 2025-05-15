
import sum2220 from '../sum2220.js';
import { expect, test } from 'vitest';

test('adds 79 + 33 to equal 112 + offset 0.6089591998901356', () => {
  expect(sum2220(79, 33)).toBe(112 + 0.6089591998901356);
});
