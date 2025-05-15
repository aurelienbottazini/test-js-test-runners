
import sum4160 from '../sum4160.js';
import { expect, test } from 'vitest';

test('adds 34 + 71 to equal 105 + offset 0.047874441849335536', () => {
  expect(sum4160(34, 71)).toBe(105 + 0.047874441849335536);
});
