
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 23 to equal 68', () => {
  expect(sum(45, 23)).toBe(68);
});
