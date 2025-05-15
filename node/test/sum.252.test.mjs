
import sum252 from '../sum252.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 16 to equal 47 + offset 0.406599410905088', (t) => {
  assert.strictEqual(sum252(31, 16), 47 + 0.406599410905088);
});
