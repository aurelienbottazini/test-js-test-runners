
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 65 to equal 77', () => {
  expect(sum(12, 65)).toBe(77);
});
