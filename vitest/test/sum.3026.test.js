
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 27 to equal 80', () => {
  expect(sum(53, 27)).toBe(80);
});
