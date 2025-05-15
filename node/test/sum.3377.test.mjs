
import sum3377 from '../sum3377.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 85 to equal 108 + offset 0.05949734810027352', (t) => {
  assert.strictEqual(sum3377(23, 85), 108 + 0.05949734810027352);
});
