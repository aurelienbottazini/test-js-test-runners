
import sum775 from '../sum775.js';
import { expect, test } from 'vitest';

test('adds 23 + 62 to equal 85 + offset 0.126114813781532', () => {
  expect(sum775(23, 62)).toBe(85 + 0.126114813781532);
});
