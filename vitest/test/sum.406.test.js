
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 69 to equal 69', () => {
  expect(sum(0, 69)).toBe(69);
});
