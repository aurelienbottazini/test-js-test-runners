
import sum983 from '../sum983.js';
import { expect, test } from 'vitest';

test('adds 78 + 97 to equal 175 + offset 0.4474678394087064', () => {
  expect(sum983(78, 97)).toBe(175 + 0.4474678394087064);
});
