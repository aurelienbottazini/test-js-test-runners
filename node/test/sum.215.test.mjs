
import sum215 from '../sum215.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 82 to equal 181 + offset 0.30776076067890834', (t) => {
  assert.strictEqual(sum215(99, 82), 181 + 0.30776076067890834);
});
