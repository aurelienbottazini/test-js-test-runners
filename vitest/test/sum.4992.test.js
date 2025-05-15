
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 74 to equal 124', () => {
  expect(sum(50, 74)).toBe(124);
});
