
import sum2072 from '../sum2072.js';
import { expect, test } from 'vitest';

test('adds 58 + 8 to equal 66 + offset 0.38170336329191523', () => {
  expect(sum2072(58, 8)).toBe(66 + 0.38170336329191523);
});
