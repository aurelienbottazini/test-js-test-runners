
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 18 to equal 68', () => {
  expect(sum(50, 18)).toBe(68);
});
