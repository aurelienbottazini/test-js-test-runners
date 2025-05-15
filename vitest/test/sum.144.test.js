
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 90 to equal 152', () => {
  expect(sum(62, 90)).toBe(152);
});
