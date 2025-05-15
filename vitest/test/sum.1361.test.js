
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 92 to equal 112', () => {
  expect(sum(20, 92)).toBe(112);
});
