
import sum709 from '../sum709.js';
import { expect, test } from 'vitest';

test('adds 20 + 97 to equal 117 + offset 0.3407157198682461', () => {
  expect(sum709(20, 97)).toBe(117 + 0.3407157198682461);
});
