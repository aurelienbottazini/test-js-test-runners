
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 8 to equal 60', () => {
  expect(sum(52, 8)).toBe(60);
});
