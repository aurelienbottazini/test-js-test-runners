
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 74 to equal 118', () => {
  expect(sum(44, 74)).toBe(118);
});
