
import sum3675 from '../sum3675.js';
import { expect, test } from 'vitest';

test('adds 67 + 6 to equal 73 + offset 0.19056851283375542', () => {
  expect(sum3675(67, 6)).toBe(73 + 0.19056851283375542);
});
