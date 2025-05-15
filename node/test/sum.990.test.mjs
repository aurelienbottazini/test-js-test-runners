
import sum990 from '../sum990.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 77 to equal 128 + offset 0.01159552051018331', (t) => {
  assert.strictEqual(sum990(51, 77), 128 + 0.01159552051018331);
});
