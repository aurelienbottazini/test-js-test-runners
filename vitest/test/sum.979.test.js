
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 42 to equal 67', () => {
  expect(sum(25, 42)).toBe(67);
});
