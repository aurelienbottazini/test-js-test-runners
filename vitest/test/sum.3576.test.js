
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 1 to equal 16', () => {
  expect(sum(15, 1)).toBe(16);
});
