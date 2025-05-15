
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 74 to equal 102', () => {
  expect(sum(28, 74)).toBe(102);
});
