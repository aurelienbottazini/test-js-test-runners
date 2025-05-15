
import sum699 from '../sum699.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 96 to equal 157 + offset 0.8375464376248241', (t) => {
  assert.strictEqual(sum699(61, 96), 157 + 0.8375464376248241);
});
