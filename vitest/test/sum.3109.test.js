
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 1 to equal 79', () => {
  expect(sum(78, 1)).toBe(79);
});
