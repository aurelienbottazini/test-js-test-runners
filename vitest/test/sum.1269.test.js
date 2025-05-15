
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 91 to equal 149', () => {
  expect(sum(58, 91)).toBe(149);
});
