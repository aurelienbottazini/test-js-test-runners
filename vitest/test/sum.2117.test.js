
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 37 to equal 122', () => {
  expect(sum(85, 37)).toBe(122);
});
