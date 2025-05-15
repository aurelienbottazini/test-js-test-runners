
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 14 to equal 16', () => {
  expect(sum(2, 14)).toBe(16);
});
