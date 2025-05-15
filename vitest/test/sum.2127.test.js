
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 26 to equal 68', () => {
  expect(sum(42, 26)).toBe(68);
});
