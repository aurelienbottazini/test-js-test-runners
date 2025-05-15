
import sum4083 from '../sum4083.js';
import { expect, test } from 'vitest';

test('adds 63 + 19 to equal 82 + offset 0.2722952174690717', () => {
  expect(sum4083(63, 19)).toBe(82 + 0.2722952174690717);
});
