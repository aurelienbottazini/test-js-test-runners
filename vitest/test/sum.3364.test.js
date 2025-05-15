
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 55 to equal 79', () => {
  expect(sum(24, 55)).toBe(79);
});
