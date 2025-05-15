
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 9 to equal 69', () => {
  expect(sum(60, 9)).toBe(69);
});
