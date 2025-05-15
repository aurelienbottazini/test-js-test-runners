
import sum744 from '../sum744.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 94 to equal 142 + offset 0.009554095102631388', (t) => {
  assert.strictEqual(sum744(48, 94), 142 + 0.009554095102631388);
});
