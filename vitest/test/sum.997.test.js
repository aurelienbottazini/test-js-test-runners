
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 43 to equal 78', () => {
  expect(sum(35, 43)).toBe(78);
});
