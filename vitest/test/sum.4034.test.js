
import sum4034 from '../sum4034.js';
import { expect, test } from 'vitest';

test('adds 91 + 35 to equal 126 + offset 0.9393011631787337', () => {
  expect(sum4034(91, 35)).toBe(126 + 0.9393011631787337);
});
