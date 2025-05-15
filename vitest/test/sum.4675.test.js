
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 38 to equal 62', () => {
  expect(sum(24, 38)).toBe(62);
});
