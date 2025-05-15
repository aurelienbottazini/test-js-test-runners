
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 90 to equal 180', () => {
  expect(sum(90, 90)).toBe(180);
});
