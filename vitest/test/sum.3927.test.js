
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 5 to equal 79', () => {
  expect(sum(74, 5)).toBe(79);
});
