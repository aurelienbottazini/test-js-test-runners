
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 29 to equal 44', () => {
  expect(sum(15, 29)).toBe(44);
});
