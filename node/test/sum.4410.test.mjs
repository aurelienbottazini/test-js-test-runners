
import sum4410 from '../sum4410.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 72 to equal 161 + offset 0.615770551969173', (t) => {
  assert.strictEqual(sum4410(89, 72), 161 + 0.615770551969173);
});
