
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 59 to equal 158', () => {
  expect(sum(99, 59)).toBe(158);
});
