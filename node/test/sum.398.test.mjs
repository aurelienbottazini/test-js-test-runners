
import sum398 from '../sum398.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 99 to equal 147 + offset 0.8371873290665625', (t) => {
  assert.strictEqual(sum398(48, 99), 147 + 0.8371873290665625);
});
