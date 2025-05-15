
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 0 to equal 92', () => {
  expect(sum(92, 0)).toBe(92);
});
