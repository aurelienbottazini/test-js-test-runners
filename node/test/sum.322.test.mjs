
import sum322 from '../sum322.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 91 to equal 182 + offset 0.85378323138721', (t) => {
  assert.strictEqual(sum322(91, 91), 182 + 0.85378323138721);
});
