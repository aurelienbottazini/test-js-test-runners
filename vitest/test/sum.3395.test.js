
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 74 to equal 89', () => {
  expect(sum(15, 74)).toBe(89);
});
