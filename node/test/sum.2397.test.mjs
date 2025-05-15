
import sum2397 from '../sum2397.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 87 to equal 164 + offset 0.9349350676542281', (t) => {
  assert.strictEqual(sum2397(77, 87), 164 + 0.9349350676542281);
});
