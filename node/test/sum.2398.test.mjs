
import sum2398 from '../sum2398.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 89 to equal 122 + offset 0.9232689578179418', (t) => {
  assert.strictEqual(sum2398(33, 89), 122 + 0.9232689578179418);
});
