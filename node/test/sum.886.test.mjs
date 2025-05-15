
import sum886 from '../sum886.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 37 to equal 74 + offset 0.00021243167836204613', (t) => {
  assert.strictEqual(sum886(37, 37), 74 + 0.00021243167836204613);
});
