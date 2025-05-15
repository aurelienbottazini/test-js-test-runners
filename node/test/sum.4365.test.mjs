
import sum4365 from '../sum4365.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 51 to equal 133 + offset 0.9916691383084011', (t) => {
  assert.strictEqual(sum4365(82, 51), 133 + 0.9916691383084011);
});
