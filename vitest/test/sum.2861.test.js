
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 37 to equal 128', () => {
  expect(sum(91, 37)).toBe(128);
});
