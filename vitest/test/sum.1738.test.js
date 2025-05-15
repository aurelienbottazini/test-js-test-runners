
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 27 to equal 60', () => {
  expect(sum(33, 27)).toBe(60);
});
