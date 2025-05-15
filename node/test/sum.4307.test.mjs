
import sum4307 from '../sum4307.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 8 to equal 59 + offset 0.017152021574548315', (t) => {
  assert.strictEqual(sum4307(51, 8), 59 + 0.017152021574548315);
});
