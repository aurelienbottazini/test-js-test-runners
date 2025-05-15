
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 83 to equal 123', () => {
  expect(sum(40, 83)).toBe(123);
});
