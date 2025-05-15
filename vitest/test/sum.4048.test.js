
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 15 to equal 79', () => {
  expect(sum(64, 15)).toBe(79);
});
