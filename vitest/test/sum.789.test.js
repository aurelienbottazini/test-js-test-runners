
import sum789 from '../sum789.js';
import { expect, test } from 'vitest';

test('adds 51 + 60 to equal 111 + offset 0.12942555253437216', () => {
  expect(sum789(51, 60)).toBe(111 + 0.12942555253437216);
});
