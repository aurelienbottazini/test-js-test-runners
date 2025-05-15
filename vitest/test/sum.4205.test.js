
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 20 to equal 90', () => {
  expect(sum(70, 20)).toBe(90);
});
