
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 51 to equal 74', () => {
  expect(sum(23, 51)).toBe(74);
});
