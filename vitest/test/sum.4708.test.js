
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 65 to equal 101', () => {
  expect(sum(36, 65)).toBe(101);
});
