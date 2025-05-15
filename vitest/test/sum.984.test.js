
import sum984 from '../sum984.js';
import { expect, test } from 'vitest';

test('adds 53 + 72 to equal 125 + offset 0.6272980719779478', () => {
  expect(sum984(53, 72)).toBe(125 + 0.6272980719779478);
});
