
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 79 to equal 95', () => {
  expect(sum(16, 79)).toBe(95);
});
