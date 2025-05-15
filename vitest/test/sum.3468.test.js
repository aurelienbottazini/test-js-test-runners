
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 8 to equal 89', () => {
  expect(sum(81, 8)).toBe(89);
});
