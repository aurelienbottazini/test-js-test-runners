
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 34 to equal 92', () => {
  expect(sum(58, 34)).toBe(92);
});
