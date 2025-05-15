
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 79 to equal 108', () => {
  expect(sum(29, 79)).toBe(108);
});
