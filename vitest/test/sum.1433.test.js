
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 62 to equal 74', () => {
  expect(sum(12, 62)).toBe(74);
});
