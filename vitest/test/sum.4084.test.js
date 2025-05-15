
import sum4084 from '../sum4084.js';
import { expect, test } from 'vitest';

test('adds 66 + 23 to equal 89 + offset 0.8165558906057803', () => {
  expect(sum4084(66, 23)).toBe(89 + 0.8165558906057803);
});
