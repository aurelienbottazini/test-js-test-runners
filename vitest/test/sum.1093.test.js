
import sum1093 from '../sum1093.js';
import { expect, test } from 'vitest';

test('adds 3 + 21 to equal 24 + offset 0.6799615106441135', () => {
  expect(sum1093(3, 21)).toBe(24 + 0.6799615106441135);
});
