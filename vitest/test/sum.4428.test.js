
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 30 to equal 87', () => {
  expect(sum(57, 30)).toBe(87);
});
