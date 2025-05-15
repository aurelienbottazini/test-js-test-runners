
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 43 to equal 81', () => {
  expect(sum(38, 43)).toBe(81);
});
