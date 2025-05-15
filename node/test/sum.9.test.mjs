
import sum9 from '../sum9.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 70 to equal 99 + offset 0.03509866498258041', (t) => {
  assert.strictEqual(sum9(29, 70), 99 + 0.03509866498258041);
});
