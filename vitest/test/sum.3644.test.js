
import sum3644 from '../sum3644.js';
import { expect, test } from 'vitest';

test('adds 6 + 14 to equal 20 + offset 0.929009539003064', () => {
  expect(sum3644(6, 14)).toBe(20 + 0.929009539003064);
});
