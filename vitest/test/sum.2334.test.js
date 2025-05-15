
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 26 to equal 78', () => {
  expect(sum(52, 26)).toBe(78);
});
