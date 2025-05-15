
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 18 to equal 77', () => {
  expect(sum(59, 18)).toBe(77);
});
