
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 49 to equal 89', () => {
  expect(sum(40, 49)).toBe(89);
});
