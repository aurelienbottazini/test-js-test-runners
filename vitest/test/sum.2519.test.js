
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 13 to equal 45', () => {
  expect(sum(32, 13)).toBe(45);
});
