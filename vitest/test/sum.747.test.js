
import sum747 from '../sum747.js';
import { expect, test } from 'vitest';

test('adds 57 + 88 to equal 145 + offset 0.20106473604279618', () => {
  expect(sum747(57, 88)).toBe(145 + 0.20106473604279618);
});
