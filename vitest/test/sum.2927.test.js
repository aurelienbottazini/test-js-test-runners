
import sum2927 from '../sum2927.js';
import { expect, test } from 'vitest';

test('adds 86 + 80 to equal 166 + offset 0.1070588866516311', () => {
  expect(sum2927(86, 80)).toBe(166 + 0.1070588866516311);
});
