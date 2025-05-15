
import sum4755 from '../sum4755.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 43 to equal 61 + offset 0.8491110239261569', (t) => {
  assert.strictEqual(sum4755(18, 43), 61 + 0.8491110239261569);
});
