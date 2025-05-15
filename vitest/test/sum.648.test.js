
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 25 to equal 42', () => {
  expect(sum(17, 25)).toBe(42);
});
