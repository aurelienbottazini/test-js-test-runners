
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 18 to equal 62', () => {
  expect(sum(44, 18)).toBe(62);
});
