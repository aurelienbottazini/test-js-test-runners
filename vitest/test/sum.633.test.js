
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 34 to equal 65', () => {
  expect(sum(31, 34)).toBe(65);
});
