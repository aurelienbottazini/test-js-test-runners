
import sum188 from '../sum188.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 95 to equal 101 + offset 0.10204446226607122', (t) => {
  assert.strictEqual(sum188(6, 95), 101 + 0.10204446226607122);
});
