
import sum2675 from '../sum2675.js';
import { expect, test } from 'vitest';

test('adds 91 + 60 to equal 151 + offset 0.9585824645239245', () => {
  expect(sum2675(91, 60)).toBe(151 + 0.9585824645239245);
});
