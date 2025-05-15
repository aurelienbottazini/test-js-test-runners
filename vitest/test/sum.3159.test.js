
import sum3159 from '../sum3159.js';
import { expect, test } from 'vitest';

test('adds 31 + 73 to equal 104 + offset 0.11583756673120749', () => {
  expect(sum3159(31, 73)).toBe(104 + 0.11583756673120749);
});
