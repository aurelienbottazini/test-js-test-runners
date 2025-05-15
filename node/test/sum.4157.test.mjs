
import sum4157 from '../sum4157.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 25 to equal 42 + offset 0.10351663109945797', (t) => {
  assert.strictEqual(sum4157(17, 25), 42 + 0.10351663109945797);
});
