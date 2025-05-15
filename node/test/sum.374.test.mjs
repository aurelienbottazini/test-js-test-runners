
import sum374 from '../sum374.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 78 to equal 135 + offset 0.4349752947094284', (t) => {
  assert.strictEqual(sum374(57, 78), 135 + 0.4349752947094284);
});
