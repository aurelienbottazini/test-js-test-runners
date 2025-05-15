
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 78 to equal 166', () => {
  expect(sum(88, 78)).toBe(166);
});
