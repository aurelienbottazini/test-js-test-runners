
import sum2028 from '../sum2028.js';
import { expect, test } from 'vitest';

test('adds 81 + 40 to equal 121 + offset 0.33119105424891104', () => {
  expect(sum2028(81, 40)).toBe(121 + 0.33119105424891104);
});
