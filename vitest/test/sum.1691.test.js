
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 39 to equal 79', () => {
  expect(sum(40, 39)).toBe(79);
});
