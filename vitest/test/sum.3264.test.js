
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 93 to equal 100', () => {
  expect(sum(7, 93)).toBe(100);
});
