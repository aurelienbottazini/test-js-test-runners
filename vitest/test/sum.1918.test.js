
import sum1918 from '../sum1918.js';
import { expect, test } from 'vitest';

test('adds 91 + 82 to equal 173 + offset 0.8547311885614843', () => {
  expect(sum1918(91, 82)).toBe(173 + 0.8547311885614843);
});
