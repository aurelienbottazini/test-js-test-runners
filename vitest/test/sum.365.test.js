
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 99 to equal 118', () => {
  expect(sum(19, 99)).toBe(118);
});
