
import sum934 from '../sum934.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 69 to equal 78 + offset 0.6647676287877224', (t) => {
  assert.strictEqual(sum934(9, 69), 78 + 0.6647676287877224);
});
