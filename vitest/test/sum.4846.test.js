
import sum4846 from '../sum4846.js';
import { expect, test } from 'vitest';

test('adds 7 + 7 to equal 14 + offset 0.8261682779503755', () => {
  expect(sum4846(7, 7)).toBe(14 + 0.8261682779503755);
});
