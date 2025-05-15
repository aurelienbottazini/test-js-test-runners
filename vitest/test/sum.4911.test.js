
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 77 to equal 79', () => {
  expect(sum(2, 77)).toBe(79);
});
