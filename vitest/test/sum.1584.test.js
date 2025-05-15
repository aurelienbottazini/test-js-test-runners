
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 8 to equal 16', () => {
  expect(sum(8, 8)).toBe(16);
});
