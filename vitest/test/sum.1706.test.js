
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 25 to equal 67', () => {
  expect(sum(42, 25)).toBe(67);
});
