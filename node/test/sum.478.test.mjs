
import sum478 from '../sum478.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 42 to equal 123 + offset 0.4871902200120558', (t) => {
  assert.strictEqual(sum478(81, 42), 123 + 0.4871902200120558);
});
