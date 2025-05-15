
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 57 to equal 61', () => {
  expect(sum(4, 57)).toBe(61);
});
