
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 84 to equal 95', () => {
  expect(sum(11, 84)).toBe(95);
});
