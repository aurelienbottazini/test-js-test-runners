
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 70 to equal 108', () => {
  expect(sum(38, 70)).toBe(108);
});
