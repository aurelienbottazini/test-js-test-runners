
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 43 to equal 86', () => {
  expect(sum(43, 43)).toBe(86);
});
