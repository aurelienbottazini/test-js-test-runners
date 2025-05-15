
import sum2566 from '../sum2566.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 5 to equal 17 + offset 0.624960250195435', (t) => {
  assert.strictEqual(sum2566(12, 5), 17 + 0.624960250195435);
});
