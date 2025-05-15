
import sum1944 from '../sum1944.js';
import { expect, test } from 'vitest';

test('adds 40 + 71 to equal 111 + offset 0.6703262875505974', () => {
  expect(sum1944(40, 71)).toBe(111 + 0.6703262875505974);
});
