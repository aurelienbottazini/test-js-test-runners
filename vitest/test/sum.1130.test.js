
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 31 to equal 74', () => {
  expect(sum(43, 31)).toBe(74);
});
