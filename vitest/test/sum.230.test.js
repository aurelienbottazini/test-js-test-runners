
import sum230 from '../sum230.js';
import { expect, test } from 'vitest';

test('adds 99 + 72 to equal 171 + offset 0.27505517080902675', () => {
  expect(sum230(99, 72)).toBe(171 + 0.27505517080902675);
});
