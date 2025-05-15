
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 50 to equal 68', () => {
  expect(sum(18, 50)).toBe(68);
});
