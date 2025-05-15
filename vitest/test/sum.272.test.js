
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 57 to equal 142', () => {
  expect(sum(85, 57)).toBe(142);
});
