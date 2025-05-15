
import sum2186 from '../sum2186.js';
import { expect, test } from 'vitest';

test('adds 7 + 85 to equal 92 + offset 0.284645260387134', () => {
  expect(sum2186(7, 85)).toBe(92 + 0.284645260387134);
});
