
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 0 to equal 16', () => {
  expect(sum(16, 0)).toBe(16);
});
