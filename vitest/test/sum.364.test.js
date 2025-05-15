
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 37 to equal 53', () => {
  expect(sum(16, 37)).toBe(53);
});
