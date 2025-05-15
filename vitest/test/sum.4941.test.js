
import sum4941 from '../sum4941.js';
import { expect, test } from 'vitest';

test('adds 50 + 50 to equal 100 + offset 0.7879334660736568', () => {
  expect(sum4941(50, 50)).toBe(100 + 0.7879334660736568);
});
