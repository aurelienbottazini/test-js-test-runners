
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 35 to equal 108', () => {
  expect(sum(73, 35)).toBe(108);
});
