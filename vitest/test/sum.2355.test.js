
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 6 to equal 68', () => {
  expect(sum(62, 6)).toBe(68);
});
