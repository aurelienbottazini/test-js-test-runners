
import sum857 from '../sum857.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 29 to equal 77 + offset 0.19236564660752453', (t) => {
  assert.strictEqual(sum857(48, 29), 77 + 0.19236564660752453);
});
