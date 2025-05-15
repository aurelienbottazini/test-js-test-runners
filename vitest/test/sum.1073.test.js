
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 30 to equal 84', () => {
  expect(sum(54, 30)).toBe(84);
});
