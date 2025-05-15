
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 22 to equal 69', () => {
  expect(sum(47, 22)).toBe(69);
});
