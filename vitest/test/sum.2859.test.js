
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 1 to equal 74', () => {
  expect(sum(73, 1)).toBe(74);
});
