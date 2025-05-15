
import sum229 from '../sum229.js';
import { expect, test } from 'vitest';

test('adds 56 + 27 to equal 83 + offset 0.8331507583121351', () => {
  expect(sum229(56, 27)).toBe(83 + 0.8331507583121351);
});
