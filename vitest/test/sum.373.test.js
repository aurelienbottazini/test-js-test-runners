
import sum373 from '../sum373.js';
import { expect, test } from 'vitest';

test('adds 4 + 22 to equal 26 + offset 0.130246766720733', () => {
  expect(sum373(4, 22)).toBe(26 + 0.130246766720733);
});
