
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 29 to equal 45', () => {
  expect(sum(16, 29)).toBe(45);
});
