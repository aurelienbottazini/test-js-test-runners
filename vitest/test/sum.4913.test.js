
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 25 to equal 87', () => {
  expect(sum(62, 25)).toBe(87);
});
