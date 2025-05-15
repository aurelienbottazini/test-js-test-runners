
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 77 to equal 127', () => {
  expect(sum(50, 77)).toBe(127);
});
