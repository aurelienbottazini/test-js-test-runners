
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 68 to equal 69', () => {
  expect(sum(1, 68)).toBe(69);
});
