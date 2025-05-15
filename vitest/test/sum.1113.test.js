
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 33 to equal 69', () => {
  expect(sum(36, 33)).toBe(69);
});
