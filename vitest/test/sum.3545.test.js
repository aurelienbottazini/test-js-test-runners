
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 71 to equal 166', () => {
  expect(sum(95, 71)).toBe(166);
});
