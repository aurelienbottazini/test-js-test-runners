
import sum2146 from '../sum2146.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 33 to equal 117 + offset 0.64154841394861', (t) => {
  assert.strictEqual(sum2146(84, 33), 117 + 0.64154841394861);
});
