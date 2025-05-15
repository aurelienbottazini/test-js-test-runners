
import sum4246 from '../sum4246.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 55 to equal 127 + offset 0.5221281880801806', (t) => {
  assert.strictEqual(sum4246(72, 55), 127 + 0.5221281880801806);
});
