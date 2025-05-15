
import sum987 from '../sum987.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 12 to equal 82 + offset 0.5994398648942979', (t) => {
  assert.strictEqual(sum987(70, 12), 82 + 0.5994398648942979);
});
