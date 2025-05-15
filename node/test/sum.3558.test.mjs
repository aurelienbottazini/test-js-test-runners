
import sum3558 from '../sum3558.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 25 to equal 88 + offset 0.8966538937364323', (t) => {
  assert.strictEqual(sum3558(63, 25), 88 + 0.8966538937364323);
});
