
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 21 to equal 81', () => {
  expect(sum(60, 21)).toBe(81);
});
