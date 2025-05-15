
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 90 to equal 106', () => {
  expect(sum(16, 90)).toBe(106);
});
