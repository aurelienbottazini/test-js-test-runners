
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 8 to equal 68', () => {
  expect(sum(60, 8)).toBe(68);
});
