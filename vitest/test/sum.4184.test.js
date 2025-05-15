
import sum4184 from '../sum4184.js';
import { expect, test } from 'vitest';

test('adds 24 + 54 to equal 78 + offset 0.7614956446039367', () => {
  expect(sum4184(24, 54)).toBe(78 + 0.7614956446039367);
});
