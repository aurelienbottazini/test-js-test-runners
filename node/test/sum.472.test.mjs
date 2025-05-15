
import sum472 from '../sum472.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 18 to equal 46 + offset 0.6123931352097056', (t) => {
  assert.strictEqual(sum472(28, 18), 46 + 0.6123931352097056);
});
