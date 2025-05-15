
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 56 to equal 112', () => {
  expect(sum(56, 56)).toBe(112);
});
