
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 87 to equal 114', () => {
  expect(sum(27, 87)).toBe(114);
});
