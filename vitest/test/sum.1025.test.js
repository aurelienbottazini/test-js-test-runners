
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 26 to equal 26', () => {
  expect(sum(0, 26)).toBe(26);
});
