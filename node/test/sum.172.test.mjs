
import sum172 from '../sum172.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 10 to equal 74 + offset 0.42434201543472405', (t) => {
  assert.strictEqual(sum172(64, 10), 74 + 0.42434201543472405);
});
