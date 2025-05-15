
import sum974 from '../sum974.js';
import { expect, test } from 'vitest';

test('adds 4 + 87 to equal 91 + offset 0.7087774717132368', () => {
  expect(sum974(4, 87)).toBe(91 + 0.7087774717132368);
});
