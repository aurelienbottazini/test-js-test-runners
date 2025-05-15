
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 19 to equal 50', () => {
  expect(sum(31, 19)).toBe(50);
});
