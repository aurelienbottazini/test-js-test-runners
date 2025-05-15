
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 21 to equal 87', () => {
  expect(sum(66, 21)).toBe(87);
});
