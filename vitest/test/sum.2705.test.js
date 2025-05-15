
import sum2705 from '../sum2705.js';
import { expect, test } from 'vitest';

test('adds 22 + 13 to equal 35 + offset 0.9258153386976301', () => {
  expect(sum2705(22, 13)).toBe(35 + 0.9258153386976301);
});
