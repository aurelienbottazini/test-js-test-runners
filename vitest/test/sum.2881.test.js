
import sum2881 from '../sum2881.js';
import { expect, test } from 'vitest';

test('adds 84 + 49 to equal 133 + offset 0.3240804634888622', () => {
  expect(sum2881(84, 49)).toBe(133 + 0.3240804634888622);
});
