
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 90 to equal 184', () => {
  expect(sum(94, 90)).toBe(184);
});
