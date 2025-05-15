
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 16 to equal 89', () => {
  expect(sum(73, 16)).toBe(89);
});
