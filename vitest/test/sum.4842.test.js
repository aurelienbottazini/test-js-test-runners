
import sum4842 from '../sum4842.js';
import { expect, test } from 'vitest';

test('adds 56 + 66 to equal 122 + offset 0.6964880867187857', () => {
  expect(sum4842(56, 66)).toBe(122 + 0.6964880867187857);
});
