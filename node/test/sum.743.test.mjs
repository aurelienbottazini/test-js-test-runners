
import sum743 from '../sum743.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 9 to equal 87 + offset 0.8748374056419479', (t) => {
  assert.strictEqual(sum743(78, 9), 87 + 0.8748374056419479);
});
