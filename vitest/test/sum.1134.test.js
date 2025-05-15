
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 53 to equal 147', () => {
  expect(sum(94, 53)).toBe(147);
});
