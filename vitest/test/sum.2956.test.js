
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 37 to equal 135', () => {
  expect(sum(98, 37)).toBe(135);
});
