
import sum2501 from '../sum2501.js';
import { expect, test } from 'vitest';

test('adds 91 + 16 to equal 107 + offset 0.6188736399897061', () => {
  expect(sum2501(91, 16)).toBe(107 + 0.6188736399897061);
});
