
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 26 to equal 90', () => {
  expect(sum(64, 26)).toBe(90);
});
