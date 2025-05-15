
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 97 to equal 159', () => {
  expect(sum(62, 97)).toBe(159);
});
