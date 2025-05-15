
import sum756 from '../sum756.js';
import { expect, test } from 'vitest';

test('adds 39 + 70 to equal 109 + offset 0.6453953331504997', () => {
  expect(sum756(39, 70)).toBe(109 + 0.6453953331504997);
});
