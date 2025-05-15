
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 13 to equal 79', () => {
  expect(sum(66, 13)).toBe(79);
});
