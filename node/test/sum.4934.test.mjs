
import sum4934 from '../sum4934.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 60 to equal 94 + offset 0.009968847978535922', (t) => {
  assert.strictEqual(sum4934(34, 60), 94 + 0.009968847978535922);
});
