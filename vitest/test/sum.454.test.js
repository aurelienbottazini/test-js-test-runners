
import sum454 from '../sum454.js';
import { expect, test } from 'vitest';

test('adds 28 + 80 to equal 108 + offset 0.8289121771947663', () => {
  expect(sum454(28, 80)).toBe(108 + 0.8289121771947663);
});
