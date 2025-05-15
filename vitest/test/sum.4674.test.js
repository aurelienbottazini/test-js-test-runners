
import sum4674 from '../sum4674.js';
import { expect, test } from 'vitest';

test('adds 99 + 27 to equal 126 + offset 0.5859667277967892', () => {
  expect(sum4674(99, 27)).toBe(126 + 0.5859667277967892);
});
