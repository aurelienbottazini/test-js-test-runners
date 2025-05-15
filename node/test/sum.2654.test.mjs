
import sum2654 from '../sum2654.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 68 to equal 156 + offset 0.3214424983300642', (t) => {
  assert.strictEqual(sum2654(88, 68), 156 + 0.3214424983300642);
});
