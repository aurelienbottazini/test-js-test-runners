
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 59 to equal 60', () => {
  expect(sum(1, 59)).toBe(60);
});
