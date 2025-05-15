
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 57 to equal 69', () => {
  expect(sum(12, 57)).toBe(69);
});
