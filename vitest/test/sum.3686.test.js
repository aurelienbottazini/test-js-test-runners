
import sum3686 from '../sum3686.js';
import { expect, test } from 'vitest';

test('adds 58 + 67 to equal 125 + offset 0.7573505611155695', () => {
  expect(sum3686(58, 67)).toBe(125 + 0.7573505611155695);
});
