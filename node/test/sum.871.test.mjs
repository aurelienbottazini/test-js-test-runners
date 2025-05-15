
import sum871 from '../sum871.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 97 to equal 152 + offset 0.5035446830065105', (t) => {
  assert.strictEqual(sum871(55, 97), 152 + 0.5035446830065105);
});
