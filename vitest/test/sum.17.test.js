
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 77 to equal 90', () => {
  expect(sum(13, 77)).toBe(90);
});
