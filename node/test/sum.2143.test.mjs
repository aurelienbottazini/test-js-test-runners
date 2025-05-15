
import sum2143 from '../sum2143.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 44 to equal 77 + offset 0.021299973821706675', (t) => {
  assert.strictEqual(sum2143(33, 44), 77 + 0.021299973821706675);
});
