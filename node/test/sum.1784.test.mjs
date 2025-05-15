
import sum1784 from '../sum1784.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 54 to equal 77 + offset 0.4419444509143119', (t) => {
  assert.strictEqual(sum1784(23, 54), 77 + 0.4419444509143119);
});
