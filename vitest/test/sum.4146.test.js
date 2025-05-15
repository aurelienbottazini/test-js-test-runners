
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 87 to equal 111', () => {
  expect(sum(24, 87)).toBe(111);
});
