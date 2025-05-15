
import sum403 from '../sum403.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 9 to equal 21 + offset 0.9879740427702729', (t) => {
  assert.strictEqual(sum403(12, 9), 21 + 0.9879740427702729);
});
