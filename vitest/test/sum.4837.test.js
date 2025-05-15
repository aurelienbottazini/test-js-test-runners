
import sum4837 from '../sum4837.js';
import { expect, test } from 'vitest';

test('adds 47 + 48 to equal 95 + offset 0.5359392808743025', () => {
  expect(sum4837(47, 48)).toBe(95 + 0.5359392808743025);
});
