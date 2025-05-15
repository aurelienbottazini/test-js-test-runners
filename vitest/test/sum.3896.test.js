
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 49 to equal 128', () => {
  expect(sum(79, 49)).toBe(128);
});
