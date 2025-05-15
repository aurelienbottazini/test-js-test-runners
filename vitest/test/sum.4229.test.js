
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 34 to equal 37', () => {
  expect(sum(3, 34)).toBe(37);
});
