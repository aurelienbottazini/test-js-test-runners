
import sum3105 from '../sum3105.js';
import { expect, test } from 'vitest';

test('adds 62 + 23 to equal 85 + offset 0.8216473388643827', () => {
  expect(sum3105(62, 23)).toBe(85 + 0.8216473388643827);
});
