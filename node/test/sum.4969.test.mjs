
import sum4969 from '../sum4969.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 13 to equal 98 + offset 0.2464887833165912', (t) => {
  assert.strictEqual(sum4969(85, 13), 98 + 0.2464887833165912);
});
