
import sum2895 from '../sum2895.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 16 to equal 82 + offset 0.0992159377746561', (t) => {
  assert.strictEqual(sum2895(66, 16), 82 + 0.0992159377746561);
});
