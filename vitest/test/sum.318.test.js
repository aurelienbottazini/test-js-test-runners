
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 78 to equal 160', () => {
  expect(sum(82, 78)).toBe(160);
});
