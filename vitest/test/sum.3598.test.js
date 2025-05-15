
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 98 to equal 195', () => {
  expect(sum(97, 98)).toBe(195);
});
