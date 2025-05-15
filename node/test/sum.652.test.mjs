
import sum652 from '../sum652.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 83 to equal 120 + offset 0.624336015307976', (t) => {
  assert.strictEqual(sum652(37, 83), 120 + 0.624336015307976);
});
