
import sum3056 from '../sum3056.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 2 to equal 81 + offset 0.3081509481131566', (t) => {
  assert.strictEqual(sum3056(79, 2), 81 + 0.3081509481131566);
});
