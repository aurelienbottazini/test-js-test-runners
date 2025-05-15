
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 34 to equal 39', () => {
  expect(sum(5, 34)).toBe(39);
});
