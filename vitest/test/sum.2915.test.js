
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 37 to equal 67', () => {
  expect(sum(30, 37)).toBe(67);
});
