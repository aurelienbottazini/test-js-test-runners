
import sum4302 from '../sum4302.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 32 to equal 131 + offset 0.6449103400965485', (t) => {
  assert.strictEqual(sum4302(99, 32), 131 + 0.6449103400965485);
});
