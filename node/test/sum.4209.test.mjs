
import sum4209 from '../sum4209.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 71 to equal 97 + offset 0.6930418334050004', (t) => {
  assert.strictEqual(sum4209(26, 71), 97 + 0.6930418334050004);
});
