
import sum4349 from '../sum4349.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 58 to equal 123 + offset 0.9386553524699789', (t) => {
  assert.strictEqual(sum4349(65, 58), 123 + 0.9386553524699789);
});
