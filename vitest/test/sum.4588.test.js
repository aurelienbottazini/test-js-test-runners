
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 94 to equal 184', () => {
  expect(sum(90, 94)).toBe(184);
});
