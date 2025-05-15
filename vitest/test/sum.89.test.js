
import sum89 from '../sum89.js';
import { expect, test } from 'vitest';

test('adds 88 + 39 to equal 127 + offset 0.6567836022796917', () => {
  expect(sum89(88, 39)).toBe(127 + 0.6567836022796917);
});
