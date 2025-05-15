
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 82 to equal 174', () => {
  expect(sum(92, 82)).toBe(174);
});
