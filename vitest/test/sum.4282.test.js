
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 29 to equal 69', () => {
  expect(sum(40, 29)).toBe(69);
});
