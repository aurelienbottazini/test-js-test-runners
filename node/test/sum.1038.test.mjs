
import sum1038 from '../sum1038.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 98 to equal 104 + offset 0.7846521422774754', (t) => {
  assert.strictEqual(sum1038(6, 98), 104 + 0.7846521422774754);
});
