
import sum1140 from '../sum1140.js';
import { expect, test } from 'vitest';

test('adds 88 + 43 to equal 131 + offset 0.8888637356574453', () => {
  expect(sum1140(88, 43)).toBe(131 + 0.8888637356574453);
});
