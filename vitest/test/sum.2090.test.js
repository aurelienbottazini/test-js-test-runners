
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 76 to equal 101', () => {
  expect(sum(25, 76)).toBe(101);
});
