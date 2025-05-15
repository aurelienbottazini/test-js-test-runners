
import sum3706 from '../sum3706.js';
import { expect, test } from 'vitest';

test('adds 96 + 1 to equal 97 + offset 0.11536394432707564', () => {
  expect(sum3706(96, 1)).toBe(97 + 0.11536394432707564);
});
