
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 79 to equal 79', () => {
  expect(sum(0, 79)).toBe(79);
});
