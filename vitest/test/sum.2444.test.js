
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 13 to equal 92', () => {
  expect(sum(79, 13)).toBe(92);
});
