
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 94 to equal 166', () => {
  expect(sum(72, 94)).toBe(166);
});
