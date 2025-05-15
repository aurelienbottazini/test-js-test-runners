
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 49 to equal 97', () => {
  expect(sum(48, 49)).toBe(97);
});
