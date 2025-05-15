
import sum2009 from '../sum2009.js';
import { expect, test } from 'vitest';

test('adds 30 + 35 to equal 65 + offset 0.9374281163533743', () => {
  expect(sum2009(30, 35)).toBe(65 + 0.9374281163533743);
});
