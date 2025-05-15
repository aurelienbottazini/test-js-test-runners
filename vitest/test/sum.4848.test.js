
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 35 to equal 89', () => {
  expect(sum(54, 35)).toBe(89);
});
