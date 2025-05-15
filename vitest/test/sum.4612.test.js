
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 55 to equal 88', () => {
  expect(sum(33, 55)).toBe(88);
});
