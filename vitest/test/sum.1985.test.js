
import sum1985 from '../sum1985.js';
import { expect, test } from 'vitest';

test('adds 39 + 77 to equal 116 + offset 0.42593810661769294', () => {
  expect(sum1985(39, 77)).toBe(116 + 0.42593810661769294);
});
