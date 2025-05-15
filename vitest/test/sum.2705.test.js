
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 26 to equal 121', () => {
  expect(sum(95, 26)).toBe(121);
});
