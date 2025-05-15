
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 48 to equal 74', () => {
  expect(sum(26, 48)).toBe(74);
});
