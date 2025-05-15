
import sum3802 from '../sum3802.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 79 to equal 109 + offset 0.4086851648836579', (t) => {
  assert.strictEqual(sum3802(30, 79), 109 + 0.4086851648836579);
});
