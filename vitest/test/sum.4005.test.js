
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 31 to equal 92', () => {
  expect(sum(61, 31)).toBe(92);
});
