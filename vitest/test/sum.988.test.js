
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 51 to equal 101', () => {
  expect(sum(50, 51)).toBe(101);
});
