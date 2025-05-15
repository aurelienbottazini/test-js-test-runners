
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 58 to equal 135', () => {
  expect(sum(77, 58)).toBe(135);
});
