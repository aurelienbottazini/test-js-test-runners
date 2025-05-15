
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 65 to equal 83', () => {
  expect(sum(18, 65)).toBe(83);
});
