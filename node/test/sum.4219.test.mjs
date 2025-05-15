
import sum4219 from '../sum4219.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 9 to equal 77 + offset 0.7985848761082702', (t) => {
  assert.strictEqual(sum4219(68, 9), 77 + 0.7985848761082702);
});
