
import sum2054 from '../sum2054.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 28 to equal 116 + offset 0.7982863667118417', (t) => {
  assert.strictEqual(sum2054(88, 28), 116 + 0.7982863667118417);
});
