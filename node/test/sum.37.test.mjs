
import sum37 from '../sum37.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 76 to equal 89 + offset 0.6610844479613027', (t) => {
  assert.strictEqual(sum37(13, 76), 89 + 0.6610844479613027);
});
