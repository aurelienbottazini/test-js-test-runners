
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 50 to equal 79', () => {
  expect(sum(29, 50)).toBe(79);
});
