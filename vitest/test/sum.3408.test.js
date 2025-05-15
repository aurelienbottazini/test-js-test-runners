
import sum3408 from '../sum3408.js';
import { expect, test } from 'vitest';

test('adds 66 + 96 to equal 162 + offset 0.37499427910018646', () => {
  expect(sum3408(66, 96)).toBe(162 + 0.37499427910018646);
});
