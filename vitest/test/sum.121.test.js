
import sum121 from '../sum121.js';
import { expect, test } from 'vitest';

test('adds 91 + 13 to equal 104 + offset 0.535693795645909', () => {
  expect(sum121(91, 13)).toBe(104 + 0.535693795645909);
});
