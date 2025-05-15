
import sum772 from '../sum772.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 92 to equal 158 + offset 0.7623589641225699', (t) => {
  assert.strictEqual(sum772(66, 92), 158 + 0.7623589641225699);
});
