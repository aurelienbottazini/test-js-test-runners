
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 9 to equal 60', () => {
  expect(sum(51, 9)).toBe(60);
});
