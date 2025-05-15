
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 27 to equal 108', () => {
  expect(sum(81, 27)).toBe(108);
});
