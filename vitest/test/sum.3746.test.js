
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 25 to equal 68', () => {
  expect(sum(43, 25)).toBe(68);
});
