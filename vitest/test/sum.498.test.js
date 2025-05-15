
import sum498 from '../sum498.js';
import { expect, test } from 'vitest';

test('adds 90 + 15 to equal 105 + offset 0.49744709607843507', () => {
  expect(sum498(90, 15)).toBe(105 + 0.49744709607843507);
});
