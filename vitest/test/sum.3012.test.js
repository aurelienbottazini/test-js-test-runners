
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 38 to equal 106', () => {
  expect(sum(68, 38)).toBe(106);
});
