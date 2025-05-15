
import sum958 from '../sum958.js';
import { expect, test } from 'vitest';

test('adds 58 + 39 to equal 97 + offset 0.22513923589992302', () => {
  expect(sum958(58, 39)).toBe(97 + 0.22513923589992302);
});
