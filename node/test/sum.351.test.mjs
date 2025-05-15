
import sum351 from '../sum351.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 30 to equal 63 + offset 0.6845336810025909', (t) => {
  assert.strictEqual(sum351(33, 30), 63 + 0.6845336810025909);
});
