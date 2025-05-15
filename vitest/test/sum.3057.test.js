
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 18 to equal 79', () => {
  expect(sum(61, 18)).toBe(79);
});
