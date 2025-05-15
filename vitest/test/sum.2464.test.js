
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 77 to equal 174', () => {
  expect(sum(97, 77)).toBe(174);
});
