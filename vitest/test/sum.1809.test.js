
import sum1809 from '../sum1809.js';
import { expect, test } from 'vitest';

test('adds 31 + 26 to equal 57 + offset 0.876524796797478', () => {
  expect(sum1809(31, 26)).toBe(57 + 0.876524796797478);
});
