
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 76 to equal 79', () => {
  expect(sum(3, 76)).toBe(79);
});
