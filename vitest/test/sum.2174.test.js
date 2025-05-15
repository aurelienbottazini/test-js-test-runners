
import sum2174 from '../sum2174.js';
import { expect, test } from 'vitest';

test('adds 39 + 81 to equal 120 + offset 0.37711344264137703', () => {
  expect(sum2174(39, 81)).toBe(120 + 0.37711344264137703);
});
