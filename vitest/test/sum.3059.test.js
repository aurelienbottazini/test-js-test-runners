
import sum3059 from '../sum3059.js';
import { expect, test } from 'vitest';

test('adds 93 + 47 to equal 140 + offset 0.8888962812904484', () => {
  expect(sum3059(93, 47)).toBe(140 + 0.8888962812904484);
});
