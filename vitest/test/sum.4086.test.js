
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 19 to equal 101', () => {
  expect(sum(82, 19)).toBe(101);
});
