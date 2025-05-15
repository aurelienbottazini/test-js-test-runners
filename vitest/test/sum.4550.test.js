
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 30 to equal 121', () => {
  expect(sum(91, 30)).toBe(121);
});
