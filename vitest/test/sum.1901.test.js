
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 39 to equal 69', () => {
  expect(sum(30, 39)).toBe(69);
});
