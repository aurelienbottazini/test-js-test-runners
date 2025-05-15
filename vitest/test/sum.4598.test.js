
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 79 to equal 101', () => {
  expect(sum(22, 79)).toBe(101);
});
