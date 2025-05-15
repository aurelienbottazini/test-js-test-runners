
import sum3912 from '../sum3912.js';
import { expect, test } from 'vitest';

test('adds 13 + 80 to equal 93 + offset 0.6841054263167347', () => {
  expect(sum3912(13, 80)).toBe(93 + 0.6841054263167347);
});
