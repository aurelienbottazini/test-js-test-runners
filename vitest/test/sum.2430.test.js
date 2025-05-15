
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 51 to equal 95', () => {
  expect(sum(44, 51)).toBe(95);
});
