
import sum3758 from '../sum3758.js';
import { expect, test } from 'vitest';

test('adds 88 + 27 to equal 115 + offset 0.9462389154317808', () => {
  expect(sum3758(88, 27)).toBe(115 + 0.9462389154317808);
});
