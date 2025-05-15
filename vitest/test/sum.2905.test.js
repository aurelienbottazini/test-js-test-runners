
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 14 to equal 62', () => {
  expect(sum(48, 14)).toBe(62);
});
