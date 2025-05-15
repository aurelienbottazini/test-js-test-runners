
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 58 to equal 108', () => {
  expect(sum(50, 58)).toBe(108);
});
