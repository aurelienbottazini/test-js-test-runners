
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 79 to equal 118', () => {
  expect(sum(39, 79)).toBe(118);
});
