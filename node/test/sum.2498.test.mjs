
import sum2498 from '../sum2498.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 20 to equal 96 + offset 0.35523553747136816', (t) => {
  assert.strictEqual(sum2498(76, 20), 96 + 0.35523553747136816);
});
