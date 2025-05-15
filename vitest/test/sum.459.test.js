
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 95 to equal 101', () => {
  expect(sum(6, 95)).toBe(101);
});
