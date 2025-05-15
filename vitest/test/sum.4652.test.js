
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 68 to equal 89', () => {
  expect(sum(21, 68)).toBe(89);
});
