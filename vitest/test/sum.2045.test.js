
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 5 to equal 33', () => {
  expect(sum(28, 5)).toBe(33);
});
