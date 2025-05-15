
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 6 to equal 22', () => {
  expect(sum(16, 6)).toBe(22);
});
