
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 14 to equal 89', () => {
  expect(sum(75, 14)).toBe(89);
});
