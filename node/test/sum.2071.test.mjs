
import sum2071 from '../sum2071.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 32 to equal 108 + offset 0.36565539851478446', (t) => {
  assert.strictEqual(sum2071(76, 32), 108 + 0.36565539851478446);
});
