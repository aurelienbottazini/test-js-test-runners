
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 62 to equal 89', () => {
  expect(sum(27, 62)).toBe(89);
});
