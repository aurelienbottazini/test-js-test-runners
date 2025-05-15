
import sum2137 from '../sum2137.js';
import { expect, test } from 'vitest';

test('adds 88 + 65 to equal 153 + offset 0.8735392819501616', () => {
  expect(sum2137(88, 65)).toBe(153 + 0.8735392819501616);
});
