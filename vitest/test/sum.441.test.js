
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 26 to equal 74', () => {
  expect(sum(48, 26)).toBe(74);
});
