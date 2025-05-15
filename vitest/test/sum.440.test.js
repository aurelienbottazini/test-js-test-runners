
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 73 to equal 135', () => {
  expect(sum(62, 73)).toBe(135);
});
