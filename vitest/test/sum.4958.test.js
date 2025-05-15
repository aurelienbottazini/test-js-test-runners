
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 11 to equal 89', () => {
  expect(sum(78, 11)).toBe(89);
});
