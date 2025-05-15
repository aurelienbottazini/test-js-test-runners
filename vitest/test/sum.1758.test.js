
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 90 to equal 132', () => {
  expect(sum(42, 90)).toBe(132);
});
