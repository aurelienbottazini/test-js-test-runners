
import sum652 from '../sum652.js';
import { expect, test } from 'vitest';

test('adds 4 + 29 to equal 33 + offset 0.7339489442539374', () => {
  expect(sum652(4, 29)).toBe(33 + 0.7339489442539374);
});
