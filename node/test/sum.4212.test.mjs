
import sum4212 from '../sum4212.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 50 to equal 77 + offset 0.34491474889689744', (t) => {
  assert.strictEqual(sum4212(27, 50), 77 + 0.34491474889689744);
});
