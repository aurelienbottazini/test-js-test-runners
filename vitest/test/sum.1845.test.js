
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 21 to equal 62', () => {
  expect(sum(41, 21)).toBe(62);
});
