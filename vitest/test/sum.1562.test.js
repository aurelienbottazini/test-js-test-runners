
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 26 to equal 122', () => {
  expect(sum(96, 26)).toBe(122);
});
