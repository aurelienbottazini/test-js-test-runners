
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 83 to equal 100', () => {
  expect(sum(17, 83)).toBe(100);
});
