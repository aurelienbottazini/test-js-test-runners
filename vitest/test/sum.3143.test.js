
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 38 to equal 79', () => {
  expect(sum(41, 38)).toBe(79);
});
