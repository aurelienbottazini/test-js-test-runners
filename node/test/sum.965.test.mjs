
import sum965 from '../sum965.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 75 to equal 80 + offset 0.5120989811767298', (t) => {
  assert.strictEqual(sum965(5, 75), 80 + 0.5120989811767298);
});
