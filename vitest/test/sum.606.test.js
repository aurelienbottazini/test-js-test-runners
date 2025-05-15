
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 6 to equal 88', () => {
  expect(sum(82, 6)).toBe(88);
});
