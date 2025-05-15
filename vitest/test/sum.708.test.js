
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 82 to equal 92', () => {
  expect(sum(10, 82)).toBe(92);
});
