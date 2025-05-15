
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 91 to equal 118', () => {
  expect(sum(27, 91)).toBe(118);
});
