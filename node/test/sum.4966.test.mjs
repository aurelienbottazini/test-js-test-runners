
import sum4966 from '../sum4966.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 85 to equal 127 + offset 0.1419887031387338', (t) => {
  assert.strictEqual(sum4966(42, 85), 127 + 0.1419887031387338);
});
