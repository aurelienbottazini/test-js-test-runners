
import sum2195 from '../sum2195.js';
import { expect, test } from 'vitest';

test('adds 48 + 96 to equal 144 + offset 0.8679366485735098', () => {
  expect(sum2195(48, 96)).toBe(144 + 0.8679366485735098);
});
