
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 16 to equal 106', () => {
  expect(sum(90, 16)).toBe(106);
});
