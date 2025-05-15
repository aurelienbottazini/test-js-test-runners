
import sum915 from '../sum915.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 55 to equal 77 + offset 0.20719140898202904', (t) => {
  assert.strictEqual(sum915(22, 55), 77 + 0.20719140898202904);
});
