
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 16 to equal 78', () => {
  expect(sum(62, 16)).toBe(78);
});
