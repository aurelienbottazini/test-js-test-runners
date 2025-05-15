
import sum983 from '../sum983.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 36 to equal 125 + offset 0.5816735238703059', (t) => {
  assert.strictEqual(sum983(89, 36), 125 + 0.5816735238703059);
});
