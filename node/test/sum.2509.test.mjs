
import sum2509 from '../sum2509.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 32 to equal 104 + offset 0.32629009877862314', (t) => {
  assert.strictEqual(sum2509(72, 32), 104 + 0.32629009877862314);
});
