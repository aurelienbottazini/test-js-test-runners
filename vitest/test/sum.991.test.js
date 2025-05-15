
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 17 to equal 62', () => {
  expect(sum(45, 17)).toBe(62);
});
