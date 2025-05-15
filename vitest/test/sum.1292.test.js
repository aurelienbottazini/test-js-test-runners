
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 38 to equal 108', () => {
  expect(sum(70, 38)).toBe(108);
});
