
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 34 to equal 100', () => {
  expect(sum(66, 34)).toBe(100);
});
