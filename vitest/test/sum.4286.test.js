
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 28 to equal 90', () => {
  expect(sum(62, 28)).toBe(90);
});
