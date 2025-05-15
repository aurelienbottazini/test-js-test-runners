
import sum3206 from '../sum3206.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 99 to equal 196 + offset 0.022735834988154346', (t) => {
  assert.strictEqual(sum3206(97, 99), 196 + 0.022735834988154346);
});
