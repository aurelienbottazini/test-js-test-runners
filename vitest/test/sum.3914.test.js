
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 33 to equal 92', () => {
  expect(sum(59, 33)).toBe(92);
});
