
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 94 to equal 160', () => {
  expect(sum(66, 94)).toBe(160);
});
