
import sum1904 from '../sum1904.js';
import { expect, test } from 'vitest';

test('adds 8 + 78 to equal 86 + offset 0.10640678174203477', () => {
  expect(sum1904(8, 78)).toBe(86 + 0.10640678174203477);
});
