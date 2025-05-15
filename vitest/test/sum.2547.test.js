
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 88 to equal 92', () => {
  expect(sum(4, 88)).toBe(92);
});
