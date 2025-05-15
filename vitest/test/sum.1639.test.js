
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 33 to equal 87', () => {
  expect(sum(54, 33)).toBe(87);
});
