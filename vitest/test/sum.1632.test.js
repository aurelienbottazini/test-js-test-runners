
import sum1632 from '../sum1632.js';
import { expect, test } from 'vitest';

test('adds 85 + 62 to equal 147 + offset 0.42428804461230807', () => {
  expect(sum1632(85, 62)).toBe(147 + 0.42428804461230807);
});
