
import sum468 from '../sum468.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 6 to equal 91 + offset 0.41337688367123837', (t) => {
  assert.strictEqual(sum468(85, 6), 91 + 0.41337688367123837);
});
