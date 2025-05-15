
import sum217 from '../sum217.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 45 to equal 55 + offset 0.6435767164823284', (t) => {
  assert.strictEqual(sum217(10, 45), 55 + 0.6435767164823284);
});
