
import sum3189 from '../sum3189.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 48 to equal 111 + offset 0.20622467196796612', (t) => {
  assert.strictEqual(sum3189(63, 48), 111 + 0.20622467196796612);
});
