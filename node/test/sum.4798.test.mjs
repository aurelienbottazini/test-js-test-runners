
import sum4798 from '../sum4798.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 6 to equal 76 + offset 0.3278158833256627', (t) => {
  assert.strictEqual(sum4798(70, 6), 76 + 0.3278158833256627);
});
