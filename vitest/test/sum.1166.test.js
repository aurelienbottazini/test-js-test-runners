
import sum1166 from '../sum1166.js';
import { expect, test } from 'vitest';

test('adds 84 + 71 to equal 155 + offset 0.8725772730122064', () => {
  expect(sum1166(84, 71)).toBe(155 + 0.8725772730122064);
});
