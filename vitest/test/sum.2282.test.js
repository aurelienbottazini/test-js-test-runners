
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 71 to equal 92', () => {
  expect(sum(21, 71)).toBe(92);
});
