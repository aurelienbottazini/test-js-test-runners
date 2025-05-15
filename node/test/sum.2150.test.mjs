
import sum2150 from '../sum2150.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 45 to equal 53 + offset 0.15100339298623144', (t) => {
  assert.strictEqual(sum2150(8, 45), 53 + 0.15100339298623144);
});
