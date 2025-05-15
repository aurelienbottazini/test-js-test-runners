
import sum4731 from '../sum4731.js';
import { expect, test } from 'vitest';

test('adds 37 + 22 to equal 59 + offset 0.0882481862115907', () => {
  expect(sum4731(37, 22)).toBe(59 + 0.0882481862115907);
});
