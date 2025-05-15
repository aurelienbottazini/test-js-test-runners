
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 35 to equal 69', () => {
  expect(sum(34, 35)).toBe(69);
});
