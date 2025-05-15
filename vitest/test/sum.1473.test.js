
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 70 to equal 123', () => {
  expect(sum(53, 70)).toBe(123);
});
