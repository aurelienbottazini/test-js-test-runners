
import sum2743 from '../sum2743.js';
import { expect, test } from 'vitest';

test('adds 30 + 31 to equal 61 + offset 0.1348172585619405', () => {
  expect(sum2743(30, 31)).toBe(61 + 0.1348172585619405);
});
