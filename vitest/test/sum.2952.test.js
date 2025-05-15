
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 20 to equal 81', () => {
  expect(sum(61, 20)).toBe(81);
});
