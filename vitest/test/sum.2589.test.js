
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 20 to equal 62', () => {
  expect(sum(42, 20)).toBe(62);
});
