
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 3 to equal 99', () => {
  expect(sum(96, 3)).toBe(99);
});
