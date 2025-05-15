
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 65 to equal 114', () => {
  expect(sum(49, 65)).toBe(114);
});
