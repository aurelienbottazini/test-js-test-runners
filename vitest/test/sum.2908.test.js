
import sum2908 from '../sum2908.js';
import { expect, test } from 'vitest';

test('adds 67 + 95 to equal 162 + offset 0.705996503445162', () => {
  expect(sum2908(67, 95)).toBe(162 + 0.705996503445162);
});
