
import sum2123 from '../sum2123.js';
import { expect, test } from 'vitest';

test('adds 72 + 6 to equal 78 + offset 0.2700732888096442', () => {
  expect(sum2123(72, 6)).toBe(78 + 0.2700732888096442);
});
