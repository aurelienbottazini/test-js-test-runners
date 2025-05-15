
import sum2530 from '../sum2530.js';
import { expect, test } from 'vitest';

test('adds 54 + 54 to equal 108 + offset 0.31734859740333843', () => {
  expect(sum2530(54, 54)).toBe(108 + 0.31734859740333843);
});
