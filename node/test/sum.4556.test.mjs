
import sum4556 from '../sum4556.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 57 to equal 118 + offset 0.17218341105447388', (t) => {
  assert.strictEqual(sum4556(61, 57), 118 + 0.17218341105447388);
});
