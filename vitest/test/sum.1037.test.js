
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 49 to equal 62', () => {
  expect(sum(13, 49)).toBe(62);
});
