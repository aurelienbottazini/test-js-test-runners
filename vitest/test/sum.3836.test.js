
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 15 to equal 74', () => {
  expect(sum(59, 15)).toBe(74);
});
