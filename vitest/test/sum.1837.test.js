
import sum1837 from '../sum1837.js';
import { expect, test } from 'vitest';

test('adds 99 + 65 to equal 164 + offset 0.19522314179519162', () => {
  expect(sum1837(99, 65)).toBe(164 + 0.19522314179519162);
});
