
import sum2903 from '../sum2903.js';
import { expect, test } from 'vitest';

test('adds 26 + 60 to equal 86 + offset 0.5875083576831516', () => {
  expect(sum2903(26, 60)).toBe(86 + 0.5875083576831516);
});
