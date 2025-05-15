
import sum4723 from '../sum4723.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 72 to equal 101 + offset 0.005648129293905457', (t) => {
  assert.strictEqual(sum4723(29, 72), 101 + 0.005648129293905457);
});
