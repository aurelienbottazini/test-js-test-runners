
import sum2583 from '../sum2583.js';
import { expect, test } from 'vitest';

test('adds 7 + 89 to equal 96 + offset 0.7445307115653582', () => {
  expect(sum2583(7, 89)).toBe(96 + 0.7445307115653582);
});
