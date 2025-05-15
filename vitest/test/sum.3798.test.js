
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 85 to equal 118', () => {
  expect(sum(33, 85)).toBe(118);
});
