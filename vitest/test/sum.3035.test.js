
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 47 to equal 69', () => {
  expect(sum(22, 47)).toBe(69);
});
