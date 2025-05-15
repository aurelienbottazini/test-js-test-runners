
import sum162 from '../sum162.js';
import { expect, test } from 'vitest';

test('adds 40 + 28 to equal 68 + offset 0.7617288515417312', () => {
  expect(sum162(40, 28)).toBe(68 + 0.7617288515417312);
});
