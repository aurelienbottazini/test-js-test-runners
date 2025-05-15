
import sum3631 from '../sum3631.js';
import { expect, test } from 'vitest';

test('adds 13 + 56 to equal 69 + offset 0.6330280385765478', () => {
  expect(sum3631(13, 56)).toBe(69 + 0.6330280385765478);
});
