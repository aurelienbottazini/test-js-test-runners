
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 94 to equal 147', () => {
  expect(sum(53, 94)).toBe(147);
});
