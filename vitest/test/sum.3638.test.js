
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 64 to equal 118', () => {
  expect(sum(54, 64)).toBe(118);
});
