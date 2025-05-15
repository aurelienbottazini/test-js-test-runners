
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 71 to equal 89', () => {
  expect(sum(18, 71)).toBe(89);
});
