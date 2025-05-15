
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 13 to equal 60', () => {
  expect(sum(47, 13)).toBe(60);
});
