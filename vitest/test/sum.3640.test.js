
import sum3640 from '../sum3640.js';
import { expect, test } from 'vitest';

test('adds 84 + 24 to equal 108 + offset 0.6108968806466717', () => {
  expect(sum3640(84, 24)).toBe(108 + 0.6108968806466717);
});
